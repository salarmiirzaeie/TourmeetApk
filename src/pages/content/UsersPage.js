import React from 'react';
import {DefaultHeader} from '../../components/DefaultHeader';
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
const UserPage = ({route}) => {
  const users = route.params.joinedUsers;
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="اعضا" />
        </View>
        <UserList data={users} />
      </View>
    </NativeBaseProvider>
  );
};
export default UserPage;
