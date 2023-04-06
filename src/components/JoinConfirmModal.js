import {useRoute} from '@react-navigation/native';
import {Image, Text, View, Button, Modal} from 'native-base';
import React from 'react';
import {Alert, Linking} from 'react-native';
import {joinTour} from '../services/dashboardServices';
import {paymony} from '../services/postServices';

export const JoinConfirmModal = ({setModalVisible, modalVisible, setstat}) => {
  const params = useRoute();

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
                  uri: `https://api.tourmeet.ir/uploads/tourists.png`,
                }}
              />
              <Text textAlign={'center'} fontFamily="B Yekan">
                {'دوست من قبل رفتن باید هزینه اش رو پرداخت کنی!!'}
              </Text>
              <Button
                onPress={ () => {
                  Linking.openURL('https://tourmeet.ir/#/peyment')
                  // await joinTour({
                  //   postId: params.params.id,
                  //   status: 'ok',
                  // }).then(res => {
                  //   if (res.status === 200) {
                  //     setstat();
                  //     setModalVisible(false);
                  //   } else {
                  //     Alert.alert(res.data.message);
                  //   }
                  // });
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
    </>
  );
};
