import {NativeBaseProvider, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DefaultHeader} from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {saveds} from '../../services/dashboardServices';

export const Saveds = () => {
  const [saves, setsaveds] = useState([]);
  useEffect(() => {
    saveds().then(res => {
      if (res.status === 200) {
        setsaveds(res.data);
      }
    });
  });
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.12}>
          <DefaultHeader name={'تورهای ذخیره شده'} />
        </View>
        <List2 datas={saves} />
      </View>
    </NativeBaseProvider>
  );
};
