import {
  NativeBaseProvider,
  Box,
  FlatList,
  Image,
  Pressable,
  useDisclose,
  Spinner,
  Text,
  View,
  IconButton,
  Menu,
  HamburgerIcon,
  Actionsheet,
  Button,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Modal, Platform, TouchableHighlight} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {deleteprofile, uploadprofilephoto} from '../services/userServices';
import {Formik} from 'formik';
import {useNavigation, useRoute} from '@react-navigation/native';

export const GalleryModal = ({images, mode, rate}) => {
  const {width: windowWidth} = Dimensions.get('window');
  const {isOpen, onOpen, onClose} = useDisclose();
  const [visible, setvisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const options = {
    noData: true,
  };
  const deletebutton = useRef();
  return (
    <>
      {images == null || images.length === 0 ? (
        <Image
          alt="ll"
          source={{
            uri: `http://192.168.43.153:3333/uploads/defaultProfile1.jpg`,
          }}
          size="170"
          rounded={'full'}
        />
      ) : (
        <FlatList
          data={images}
          renderItem={({item}) => {
            return (
              <Pressable onPress={() => setvisible(true)}>
                <Image
                  alt="ll"
                  source={{
                    uri: `http://192.168.43.153:3333/uploads/profilePhotos/${item.name}`,
                  }}
                  size="170"
                  rounded={'full'}
                />
              </Pressable>
            );
          }}
          pagingEnabled
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      )}

      <Formik
        initialValues={{
          image1: '',
        }}
        onSubmit={values => {
          let data = new FormData();
          data.append('image1', values.image1);
          setTimeout(async () => {
            await uploadprofilephoto(data).then(res => {
              console.log(res);
              if (res !== undefined) {
                if (res.status === 200) {
                  onClose();
                  navigation.navigate('Profile', {
                    pf: Math.random(),
                  });
                } else {
                  alert(res.data.message);
                }
              } else {
                console.log('jnnn');
                navigation.navigate('Profile', {
                  pf: Math.random(),
                });
              }
            });
          }, 1000);
        }}>
        {({
          values,

          errors,

          touched,

          handleChange,

          handleBlur,

          handleSubmit,

          isSubmitting,
          setFieldValue,
        }) =>
          mode !== 'camp' ? (
            <Pressable
              display={mode !== 'myprofile' ? 'none' : 'flex'}
              onPress={async () => {
                await launchImageLibrary(options, async response => {
                  if (response.assets[0].uri) {
                    let data = {
                      name: response.assets[0].fileName,
                      type: response.assets[0].type,
                      uri:
                        Platform.OS === 'android'
                          ? response.assets[0].uri
                          : response.assets[0].uri.replace('file://', ''),
                    };
                    setFieldValue('image1', data);
                  }
                });
                onOpen();
                handleSubmit();
              }}
              justifyContent={'center'}
              alignItems="center"
              rounded={'full'}
              bg={'#24C2D8'}
              alignSelf="flex-end"
              mt={130}
              zIndex={10}
              position="absolute"
              size={10}>
              <AntDesign style={{fontSize: 15}} name="camera" />
            </Pressable>
          ) : (
            <Box
              justifyContent={'center'}
              alignItems="center"
              rounded={'full'}
              bg={'#24C2D8'}
              alignSelf="flex-end"
              mt={130}
              zIndex={10}
              position="absolute"
              size={10}>
              <Text>{rate}</Text>
            </Box>
          )
        }
      </Formik>
      <Modal
        visible={visible}
        animationType={'fade'}
        onRequestClose={() => setvisible(false)}>
        <View
          p={3}
          bg="black"
          flexDirection={'row'}
          justifyContent={'space-between'}
          w={'full'}>
          <Menu
            display={mode !== 'myprofile' ? 'none' : 'flex'}
            w="190"
            trigger={triggerProps => {
              return (
                <IconButton
                  my={3}
                  icon={
                    <Entypo
                      style={{
                        fontSize: 20,
                        color: 'gray',
                        display: mode !== 'myprofile' ? 'none' : 'flex',
                      }}
                      name="dots-three-vertical"
                    />
                  }
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                />
              );
            }}>
            <Menu.Item
              onPress={() => {
                console.log(deletebutton.current.directEventTypes);
              }}
              flexDirection={'row-reverse'}>
              حذف
            </Menu.Item>
          </Menu>
          <IconButton
            my={3}
            onPress={() => setvisible(false)}
            icon={<Entypo style={{fontSize: 20, color: 'gray'}} name="cross" />}
          />
        </View>

        <View bg="black" justifyContent="center" flex={1}>
          <View alignSelf={'center'} mt={-10} flex={0.5} bg={'blue.300'}>
            <FlatList
              data={images}
              renderItem={({item}) => {
                return (
                  <>
                    <Button
                      display={mode !== 'myprofile' ? 'none' : 'flex'}
                      ref={deletebutton}
                      onPress={() => {
                        console.log('ggggggggggggg');
                        deleteprofile(item.name).then(res => {
                          if (res.status === 200) {
                            console.log('حله');
                          } else {
                            console.log(res.data.message);
                          }
                        });
                      }}>
                      s
                    </Button>

                    <Image
                      alt="ll"
                      source={{
                        uri: `http://192.168.43.153:3333/uploads/profilePhotos/${item.name}`,
                      }}
                      style={{width: windowWidth, height: '100%'}}
                    />
                  </>
                );
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        hideDragIndicator
        disableOverlay>
        <Actionsheet.Content justifyContent={'center'} h={200}>
          <Spinner size={'lg'} />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
