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

export const Modalpermiss = ({images, visiblity, setvisible}) => {
  const {width: windowWidth} = Dimensions.get('window');
  return (
    <>
      <Modal
        visible={visiblity}
        animationType={'fade'}
        onRequestClose={() => setvisible(false)}>
        <View bg="black" justifyContent="center" flex={1}>
          <View alignSelf={'center'} flex={0.5} bg={'blue.300'}>
            <FlatList
              data={images}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      alt="ll"
                      source={{
                        uri: `http://192.168.43.153:3333/uploads/permissions/${item.name}`,
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
    </>
  );
};
