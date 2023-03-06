import {useRoute} from '@react-navigation/native';
import {Image, Text, View, Button, Modal} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';
import {isJoined, joinTour, unjoinTour} from '../services/dashboardServices';

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
                  uri: `http://192.168.43.153:3333/uploads/tourists.png`,
                }}
              />
              <Text textAlign={'center'} fontFamily="B Yekan">
                {'دوست من قبل رفتن باید هزینه اش رو پرداخت کنی!!'}
              </Text>
              <Button
                onPress={async () => {
                  await joinTour({
                    postId: params.params.id,
                    status: 'ok',
                  }).then(res => {
                    if (res.status === 200) {
                      setstat();
                      setModalVisible(false)
                    } else {
                      Alert.alert(res.data.message);
                    }
                  });
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
