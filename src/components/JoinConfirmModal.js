import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, Text, View, Button, Modal, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {paymony} from '../services/postServices';
import {Linking} from 'react-native';
import {BuyllawModal} from './BuyllawModal';
import CheckBox from '@react-native-community/checkbox';
import {joinTour} from '../services/dashboardServices';
export const JoinConfirmModal = ({setModalVisible, modalVisible, setstat}) => {
  const [showModal, setShowModal] = useState(false);
  const stormodal = () => {
    setShowModal(true);
  };
  const params = useRoute();
  const [groupValues, setGroupValues] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {}, [modalVisible]);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setGroupValues(false);
        }}>
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
              <View mt={2} flexDirection={'row-reverse'}>
                <CheckBox
                  disabled={false}
                  value={groupValues}
                  onValueChange={() => setGroupValues(!groupValues)}
                />
                <Pressable
                  onPress={() => {
                    stormodal();
                  }}
                  ml={1}>
                  <Text
                    color="#24C2D8"
                    style={{
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationColor: '#24C2D8',
                    }}>
                    قوانین خرید تورمیت
                  </Text>
                </Pressable>

                <Text color={'gray.500'}>را خواندم و موافقم .</Text>
              </View>
              <Button
<<<<<<< HEAD
                disabled={groupValues === false ? true : false}
                onPress={() => {
                  // paymony({
=======
                onPress={() => {
                  paymony({
                    postId: params.params.id,
                  }).then(res => {
                    Linking.openURL(res.data);
                  });
                  // Linking.openURL('https://tourmeet.ir/#/peyment/')
                  // await joinTour({
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
                  //   postId: params.params.id,
                  // }).then(res => {
                  //   Linking.openURL(res.data);
                  //   setModalVisible(false);
                  //   setGroupValues(false);
                  // });
                  joinTour({postId: params.params.id});
                }}
                rounded={'xl'}
                mt={2}
                bg={'#24C2D8'}
                alignSelf={'center'}>
                <Text color={'white'} fontFamily="B Yekan">
                  {'پرداخت هزینه'}
                </Text>
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <BuyllawModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
      />
    </>
  );
};
