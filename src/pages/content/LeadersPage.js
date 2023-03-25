import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import {UserList} from '../../components/UserList';
import {NativeBaseProvider, View} from 'native-base';
import {getTourLeaders} from '../../services/postServices';
const LeadersPage = ({route}) => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getTourLeaders(route.params.id).then(res => {
      if (res.status === 200) {
        setusers(res.data);
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="لیدرها" />
        </View>
        <UserList data={users} />
      </View>
    </NativeBaseProvider>
  );
};
export default LeadersPage;
