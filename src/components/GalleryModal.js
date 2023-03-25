import {
  FlatList,
  Image,
  Pressable,
  useDisclose,
  Spinner,
  View,
  IconButton,
  Menu,
  Actionsheet,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, Modal, Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {launchImageLibrary} from 'react-native-image-picker';
import {deleteprofile, uploadprofilephoto} from '../services/userServices';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

export const GalleryModal = ({images, mode, rate, id}) => {
  const {width: windowWidth} = Dimensions.get('window');
  const {isOpen, onOpen, onClose} = useDisclose();
  const [visible, setvisible] = useState(false);
  const [nn, setnn] = useState(0);
  const [scrollstate, setscrollstate] = useState(0);
  const navigation = useNavigation();
  const options = {
    noData: true,
  };
  useEffect(() => {}, [nn]);
  return (
    <>
      {images == null || images.length === 0 ? (
        <Image
          alt="ll"
          source={{
            uri: `https://api.tourmeet.ir/uploads/defaultProfile1.jpg`,
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
                  fallbackSource={{
                    uri: `https://api.tourmeet.ir/uploads/defaultProfile1.jpg`,
                  }}
                  source={{
                    uri: `https://api.tourmeet.ir/uploads/profilePhotos/${item.name}`,
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
        onSubmit={async values => {
          let data = new FormData();
          data.append('image1', values.image1);
          setTimeout(async () => {
            await uploadprofilephoto(data).then(async res => {
              if (await res) {
                if ((await res.status) === 200) {
                  onClose();
                  navigation.navigate('Profile', {
                    pf: Math.random(100),
                  });
                } else {
                  onClose();
                }
              } else {
                Alert.alert(res.data.message);
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
          mode === 'myprofile' ? (
            <Pressable
              onPress={async () => {
                launchImageLibrary(options, async response => {
                  if (!response.didCancel) {
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
                    onOpen();
                    handleSubmit();
                  }
                });
                // await PermissionsAndroid.check(
                //   PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES &&
                //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                // ).then(response => {
                // if (response) {
                //   launchImageLibrary(options, async response => {
                //     if (!response.didCancel) {
                //       if (response.assets[0].uri) {
                //         let data = {
                //           name: response.assets[0].fileName,
                //           type: response.assets[0].type,
                //           uri:
                //             Platform.OS === 'android'
                //               ? response.assets[0].uri
                //               : response.assets[0].uri.replace('file://', ''),
                //         };
                //         setFieldValue('image1', data);
                //       }
                //       onOpen();
                //       handleSubmit();
                //     }
                //   });
                // } else {
                //   PermissionsAndroid.request(
                //     PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                //   );
                // }
                // });
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
            ''
          )
        }
      </Formik>
      <Modal
        visible={visible}
        animationType={'fade'}
        onRequestClose={() => {
          setscrollstate(0);
          setvisible(false);
        }}>
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
                let f = scrollstate / windowWidth;

                deleteprofile(images[Math.ceil(f)].name).then(res => {
                  if (res.status === 200) {
                    images.splice(Math.ceil(f), 1);
                    if (images.length === 0) {
                      setvisible(false);
                    } else {
                      setvisible(true);
                      setnn(Math.random(100));
                    }
                  } else {
                  }
                });
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
              onScroll={res => {
                setscrollstate(res.nativeEvent.contentOffset.x);
              }}
              data={images}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      alt="ll"
                      fallbackSource={{
                        uri: `https://api.tourmeet.ir/uploads/defaultProfile1.jpg`,
                      }}
                      source={{
                        uri: `https://api.tourmeet.ir/uploads/profilePhotos/${item.name}`,
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
