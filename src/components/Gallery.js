import {
  NativeBaseProvider,
  Box,
  FlatList,
  Image,
  Pressable,
  useDisclose,
  Spinner,
  View,
  Menu,
  IconButton,
} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {Dimensions, Modal} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useRef} from 'react';
export const Gallery = ({images}) => {
  const {width: windowWidth} = Dimensions.get('window');
  const {height: windowheight} = Dimensions.get('window');

  const [visible, setvisible] = useState(false);
  const img = useRef(null);

  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => setvisible(true)}>
              <Image
                ref={img}
                fallbackSource={{
                  uri: `http://192.168.43.153:3333/uploads/thumbnails/sea.jpg`,
                }}
                alt="ll"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/thumbnails/${item}`,
                }}
                style={{width: windowWidth, height: windowheight / 2.5}}
              />
            </Pressable>
          );
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        visible={visible}
        animationType={'fade'}
        onRequestClose={() => setvisible(false)}>
        <View
          px={3}
          bg="black"
          flexDirection={'row-reverse'}
          justifyContent={'space-between'}
          w={'full'}>
          
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
                  <Image
                  fallbackSource={{
                    uri: `http://192.168.43.153:3333/uploads/thumbnails/sea.jpg`,
                  }}
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
