import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, View, Text, Modal} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isJoined} from '../services/dashboardServices';
import {JoinConfirmModal} from './JoinConfirmModal';
export const DetFooter = ({sestat, mainstatus, statuss}) => {
  const params = useRoute();
  const navigation = useNavigation();
  const [joined, setJoined] = useState(false);
  const [sttats, setsttats] = useState(0);
  const logedin = useSelector(state => state.profileModeState);

  useEffect(() => {
    if (logedin) {
      isJoined({postId: params.params.id}).then(res => {
        if (res.status === 200) {
          setJoined(res.data);
        }
      });
    }
  }, [sttats]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);

  return (
    <View px={3} bg="white" justifyContent={'center'} flex={0.06}>
      {statuss === 'Recruiting' ? (
        !joined ? (
          mainstatus ? (
            <Button
              onPress={async () => {
                if (!logedin) {
                  setModalVisible2(true);
                } else {
                  setModalVisible(true);
                }
                // setJoined(true);
                // await joinTour(data);
              }}
              borderRadius={'2xl'}
              bg={'#24C2D8'}>
              <Text color={'white'} fontFamily={'B Yekan'}>
                پیوستن به سفر
              </Text>
            </Button>
          ) : (
            <Button borderRadius={'2xl'} disabled bg={'red.400'}>
              <Text color={'white'} fontFamily={'B Yekan'}>
                {'ظرفیت تکمیل'}
              </Text>
            </Button>
          )
        ) : (
          <Button disabled borderRadius={'2xl'} bg={'gray.400'}>
            عضوشده
          </Button>
        )
      ) : (
        <Button borderRadius={'2xl'} disabled bg={'red.400'}>
          <Text color={'white'} fontFamily={'B Yekan'}>
            {'تکمیل ظرفیت'}
          </Text>
        </Button>
      )}
      <JoinConfirmModal
        setstat={() => {
          sestat();
          setsttats(Math.random(1));
        }}
        modalVisible={modalVisible}
        setModalVisible={res => setModalVisible(res)}
      />
      <Modal isOpen={modalVisible2} onClose={() => setModalVisible2(false)}>
        <Modal.Content>
          <Modal.Body justifyContent={'center'}>
            <View alignSelf={'center'}>
              <Text textAlign={'center'} fontFamily="B Yekan">
                {'لطفا واردحساب کاربری خودبشوید!!'}
              </Text>
              <Button
                onPress={() => {
                  navigation.navigate('Login', {
                    id: params.params.id,
                  });
                }}
                rounded={'xl'}
                mt={2}
                bg={'#24C2D8'}
                alignSelf={'center'}>
                <Text color={'white'} fontFamily="B Yekan">
                  {'ورودبه حساب کاربری'}
                </Text>
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};
