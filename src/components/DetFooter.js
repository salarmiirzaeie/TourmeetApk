import {useRoute} from '@react-navigation/native';
import {Button, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isJoined, joinTour, unjoinTour} from '../services/dashboardServices';
export const DetFooter = () => {
  const params = useRoute();

  // console.log(params.params.id)
  const [joined, setJoined] = useState(false);
  const [toast, addToast] = useState(0);
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
  return (
    <View px={2} bg="white" flex={0.05}>
      {!joined ? (
        <Button
          onPress={async () => {
            setJoined(true);
            await joinTour(data);
          }}
          borderRadius={'xl'}
          bg={'skyblue'}>
          پیوستن
        </Button>
      ) : (
        <Button
          onPress={async () => {
            setJoined(false);
            await unjoinTour(data);
          }}
          borderRadius={'xl'}
          bg={'gray.400'}>
          عضوشده
        </Button>
      )}
    </View>
  );
};
