import React from 'react';
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
  Avatar,
} from 'native-base';
import {Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

export const UserList = ({data}) => {
  const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      {data.map((item, i) => (
        <Pressable
          onPress={() =>
            navigation.navigate('UserProfile', {
              id: item._id,
            })
          }
          my={0.5}
          key={i}
          bg={'white'}
          rounded={'lg'}
          px={2}
          h={initialLayout.height / 10}>
          <View flex={1} flexDirection={'row'}>
            <View justifyContent={'center'} flex={0.1}>
              <Entypo
                style={{fontSize: 20, alignSelf: 'center'}}
                name="dots-three-vertical"
              />
            </View>
            <View p={2} flex={0.7}>
              <Text textAlign={'right'}>{item.name}</Text>
              <Text color={'gray.400'} mt={1} textAlign={'right'}>
                {item.email}
              </Text>
            </View>

            <View alignSelf={'center'} flex={0.2}>
              <Avatar
                alignSelf={'center'}
                size={'lg'}
                source={{
                  uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                }}
              />
            </View>
          </View>
        </Pressable>
      ))}
    </NativeBaseProvider>
  );
};
