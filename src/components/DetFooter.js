import {useRoute} from '@react-navigation/native';
import {Button, View, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isJoined, joinTour, unjoinTour} from '../services/dashboardServices';
import {JoinConfirmModal} from './JoinConfirmModal';
export const DetFooter = ({sestat}) => {
  const params = useRoute();

  // console.log(params.params.id)
  const [joined, setJoined] = useState(false);
  const [sttats, setsttats] = useState(0);
  const logedin = useSelector(state => state.profileModeState);

  useEffect(() => {
    if (logedin) {
      // console.log("first")
      isJoined({postId: params.params.id}).then(res => {
        if (res.status === 200) {
          setJoined(res.data);
        }
      });
    }
  }, [sttats]);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View px={3} bg="white" justifyContent={'center'} flex={0.06}>
      {!joined ? (
        <Button
          onPress={async () => {
            setModalVisible(true);
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
        <Button
          disabled
          // onPress={async () => {
          //   setJoined(false);
          //   await unjoinTour(data);
          // }}
          borderRadius={'2xl'}
          bg={'gray.400'}>
          عضوشده
        </Button>
      )}
      <JoinConfirmModal
        setstat={() => {
          sestat()
          setsttats(Math.random(1))}}
        modalVisible={modalVisible}
        setModalVisible={res => setModalVisible(res)}
      />
    </View>
  );
};
