import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import {UserList} from '../../components/UserList';
import {NativeBaseProvider, View, ScrollView} from 'native-base';
import {getpostjoineds} from '../../services/postServices';
const UserPage = ({route}) => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getpostjoineds(route.params.id).then(res => {
      if (res.status === 200) {
        setusers(res.data);
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="افرادعضوشده" />
        </View>
        <View flex={1}>
          <ScrollView>
            <UserList data={users} />
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default UserPage;
