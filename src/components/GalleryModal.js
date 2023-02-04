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
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, Modal} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const GalleryModal = ({images}) => {
  const {width: windowWidth} = Dimensions.get('window');
  const {height: windowheight} = Dimensions.get('window');

  const {isOpen, onOpen, onClose} = useDisclose();
  const [visible, setvisible] = useState(false);
  const options = {
    noData: true,
    // selectionLimit: 5,
  };
  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => setvisible(true)}>
              <Image
                alt="ll"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/thumbnails/${item}`,
                }}
                size="170"
                rounded={'full'}
              />
            </Pressable>
          );
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Pressable
        onPress={() => {
          launchImageLibrary(options, res => {
            console.log(res);
            // setphoto(res.assets[0]);
            // console.log(res.assets[0])
          });
        }}
        justifyContent={'center'}
        alignItems="center"
        rounded={'full'}
        bg={'skyblue'}
        alignSelf="flex-end"
        mt={130}
        zIndex={10}
        position="absolute"
        size={10}>
        <AntDesign style={{fontSize: 15}} name="camera" />
      </Pressable>
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
            w="190"
            trigger={triggerProps => {
              return (
                <IconButton
                  my={3}
                  icon={
                    <Entypo
                      style={{fontSize: 20, color: 'gray'}}
                      name="dots-three-vertical"
                    />
                  }
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                />
              );
            }}>
            <Menu.Item flexDirection={'row-reverse'}>حذف</Menu.Item>
            <Menu.Item flexDirection={'row-reverse'}>ذخیره</Menu.Item>
          </Menu>
          <IconButton
            my={3}
            onPress={() => setvisible(false)}
            icon={<Entypo style={{fontSize: 20, color: 'gray'}} name="cross" />}
          />
        </View>

        <View bg="black" p={2} justifyContent="center" flex={1}>
          <View alignSelf={'center'} flex={0.5} bg={'blue.300'}>
            <FlatList
              data={images}
              renderItem={({item}) => {
                return (
                  <Image
                    alt="ll"
                    source={{
                      uri: `http://192.168.43.153:3333/uploads/thumbnails/${item}`,
                    }}
                    style={{width: windowWidth, height: '100%'}}
                  />
                );
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
