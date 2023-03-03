import {Box, NativeBaseProvider, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {getCampTours} from '../../services/postServices';

const CampTours = ({route}) => {
  const [tours, settours] = useState([]);
  useEffect(() => {
    getCampTours(route.params.id).then(res => {
      if (res.status === 200) {
        settours(res.data);
      }
    });
  },[]);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="تورها" />
        </View>
        <View flex={1}>
          <List2 datas={tours} />
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default CampTours;
