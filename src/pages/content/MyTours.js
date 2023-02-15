import {NativeBaseProvider, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DefaultHeader} from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {joineds} from '../../services/dashboardServices';

export const MyTours = () => {
  const [joins, setjoins] = useState([]);
  useEffect(() => {
    joineds().then(res => {
      if (res.status === 200) {
        setjoins(res.data);
      }
    });
  },[]);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name={'تورهای من'} />
        </View>
        <View flex={1}>
          <List2 datas={joins} />
        </View>
      </View>
    </NativeBaseProvider>
  );
};
