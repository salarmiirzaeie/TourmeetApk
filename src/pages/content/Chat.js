import {
  Box,
  NativeBaseProvider,
  ScrollView,
  View,
  Input,
  Icon,
  StatusBar,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  FlatList,
  Pressable,
  Button,
  IconButton,
} from 'native-base';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import socket from '../../utils/socket';

const Chat = ({navigation}) => {
  const [message, setmessage] = useState('');
  const data = [
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      type: 0,
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will  today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I jjjjjjjjjjjjj today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will  today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I jjjjjjjjjjjjj today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will  today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I jjjjjjjjjjjjj today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will  today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I jjjjjjjjjjjjj today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will calltodaytodaytoday today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will  today.',
      type: 1,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I jjjjjjjjjjjjj today.',
      type: 0,

      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  const focusPoint = useRef(null);
  React.useEffect(() => {
    focusPoint.current.scrollToEnd({animated: false});
  }, []);

  return (
    <NativeBaseProvider>
      <View flex={1} bg={'red.100'}>
        <View
          p={1}
          justifyContent={'space-between'}
          flexDirection={'row'}
          h={60}
          bg={'#8F95D3'}>
          <View justifyContent={'center'} flexDirection={'row'}>
            <IconButton
              onPress={() => navigation.goBack()}
              _icon={{
                as: AntDesign,
                name: 'left',
                color: 'white',
                size: 7,
                shadow: 5,
              }}
            />
            <Pressable
              onPress={() => navigation.navigate('MyProfile')}
              flexDirection={'row'}>
              <Avatar
                size="38"
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
                }}
              />
              <Text fontFamily={'B Yekan'}>SaraMazaheri</Text>
            </Pressable>
          </View>
          <View justifyContent={'center'}>
            <IconButton
              onPress={() => navigation.goBack()}
              _icon={{
                as: Feather,
                name: 'more-vertical',
                color: 'white',
                size: 7,
                shadow: 5,
              }}
            />
          </View>
        </View>
        <View flex={0.94} bg={'gray.100'}>
          <ScrollView
            onContentSizeChange={() =>
              focusPoint.current.scrollToEnd({animated: true})
            }
            ref={focusPoint}
            p={1}
            flex={0.94}
            bg={'gray.100'}>
            {data.map((item, i) => (
              <Box
                key={i}
                p={2}
                alignSelf={item.type == 0 ? 'flex-end' : 'flex-start'}
                bg={item.type == 1 ? 'white' : 'gray.300'}
                m={1}
                rounded={'xl'}>
                <Text fontFamily={'B Yekan'}>{item.recentText}</Text>
              </Box>
            ))}
          </ScrollView>
        </View>
        <View pl={2} pr={2} flex={0.08} bg={'white'}>
          <Input
            placeholder="type.."
            // onFocus={() => focusPoint.current.scrollToEnd({animated: true})}
            width="100%"
            onChangeText={msg => {
              setmessage(msg);
            }}
            h={'100%'}
            borderRadius="10"
            borderWidth="2"
            InputRightElement={
              <IconButton
                onPress={() => {
                  socket.emit('pvChat', {
                    message: message,
                    name: 'nickname',
                    to: 'socketId',
                    from: 'socket.id',
                  });
                }}
                _icon={{
                  as: Ionicons,
                  name: 'send',
                  color: '#8F95D3',
                  size: 7,
                }}
              />
            }
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default Chat;
