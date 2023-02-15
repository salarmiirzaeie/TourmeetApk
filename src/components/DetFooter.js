import {useRoute} from '@react-navigation/native';
import {Button, View,Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isJoined, joinTour, unjoinTour} from '../services/dashboardServices';
import {JoinConfirmModal} from './JoinConfirmModal';
export const DetFooter = () => {
  const params = useRoute();

  // console.log(params.params.id)
  const [joined, setJoined] = useState(false);
  const logedin = useSelector(state => state.profileModeState);
  const data = {postId: params.params.id};

  useEffect(() => {
    if (logedin) {
      // console.log("first")
      isJoined({postId: params.params.id}).then(res => {
        if (res.status === 200) {
          setJoined(res.data);
        }
      });
    }
  }, []);
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
          <Text color={"white"} fontFamily={"B Yekan"}>پیوستن به سفر</Text>
        </Button>
      ) : (
        <Button
          onPress={async () => {
            setJoined(false);
            await unjoinTour(data);
          }}
          borderRadius={'2xl'}
          bg={'gray.400'}>
          عضوشده
        </Button>
      )}
      <JoinConfirmModal
        modalVisible={modalVisible}
        setModalVisible={res => setModalVisible(res)}
      />
    </View>
  );
};
