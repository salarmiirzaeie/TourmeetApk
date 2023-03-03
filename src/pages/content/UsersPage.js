import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import {UserList} from '../../components/UserList';
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,
  ScrollView,
  Text,
  Divider,
  Actionsheet,
  useDisclose,
  Input,
  Button,
  FormControl,
  TextArea,
  useToast,
  Icon,
  CircleIcon,
  Circle,
  Pressable,
} from 'native-base';
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
        <UserList data={users} />
      </View>
    </NativeBaseProvider>
  );
};
export default UserPage;
