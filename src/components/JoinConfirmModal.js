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
  Modal,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const JoinConfirmModal = ({setModalVisible, modalVisible}) => {
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.Body justifyContent={'center'}>
            <View alignSelf={'center'}>
              <Image
                alignSelf={'center'}
                h={200}
                w={200}
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/tourists.png`,
                }}
              />
              <Text textAlign={'center'} fontFamily="B Yekan">
                {'دوست من قبل رفتن باید هزینه اش رو پرداخت کنی!!'}
              </Text>
              <Button rounded={'xl'} mt={2} bg={'#24C2D8'} alignSelf={'center'}>
                <Text color={'white'} fontFamily="B Yekan">
                  {'پرداخت هزینه'}
                </Text>
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
