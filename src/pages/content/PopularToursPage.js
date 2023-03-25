import { NativeBaseProvider, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {Nodata} from '../../components/Nodata';
import {getIndex} from '../../services/postServices';

const PopularToursPage = ({route}) => {
  const [tours, settours] = useState([]);
  const [status, setstatuss] = useState(3);

  useEffect(() => {
    getIndex().then(res => {
      if (res.status === 200) {
        setstatuss(1);
        settours(res.data.posts);
      }
      if (res.status === 408) {
        setstatuss(0);
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
          {status === 3 ? (
            <Nodata status={3} />
          ) : status === 0 ? (
            <Nodata status={0} />
          ) : (
            <List2 datas={tours} />
          )}
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default PopularToursPage;
