import {Box, NativeBaseProvider, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {getIndex} from '../../services/postServices';

const PopularToursPage = ({route}) => {
  const [tours, settours] = useState([]);
  useEffect(() => {
    getIndex().then(res => {
      if (res.status === 200) {
        settours(res.data.posts.sort((a, b) => a.capacity - b.capacity));
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="محبوب ترین تورها" />
        </View>
        <View flex={1}>
          <List2 datas={tours} />
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default PopularToursPage;
