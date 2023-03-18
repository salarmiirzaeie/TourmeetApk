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
import {getUser} from '../../services/postServices';
import socket from '../../utils/socket';
const Chat = ({navigation, route}) => {
  const [message, setmessage] = useState('');
  const [user, setuser] = useState({});
  const [datas, setdatas] = useState([{recentText: 'jjjjj', type: 1}]);
  const focusPoint = useRef(null);
  React.useEffect(() => {
    focusPoint.current.scrollToEnd({animated: false});
    socket.on('pvChat', data => {
      console.log(data)
      setdatas([...datas, {type: 0, recentText: data.message}]);
    });
    getUser(route.params.id).then(res => {
      if (res.status === 200) {
        setuser(res.data);
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <View flex={1} bg={'red.100'}>
        <View
          pr={5}
          justifyContent={'space-between'}
          flexDirection={'row-reverse'}
          h={60}
          bg={'#24C2D8'}>
          <IconButton
            onPress={() => navigation.goBack()}
            _icon={{
              as: AntDesign,
              name: 'right',
              color: 'white',
              size: 7,
              shadow: 5,
            }}
          />

          <Pressable
            flex={1}
            alignSelf={'center'}
            onPress={() =>
              navigation.navigate('UserProfile', {
                id: user.id,
              })
            }
            flexDirection={'row'}>
            <Avatar
              size="41"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
              }}
            />
            <Text alignSelf={'center'} mx={20} fontFamily={'B Yekan'}>
              SaraMazaheri
            </Text>
          </Pressable>
        </View>
      </View>
      <View flex={0.9} bg={'gray.100'}>
        <ScrollView
          onContentSizeChange={() =>
            focusPoint.current.scrollToEnd({animated: true})
          }
          ref={focusPoint}
          p={1}
          flex={0.94}
          bg={'gray.100'}>
          {datas.map((item, i) => (
            <Box
              key={i}
              p={2}
              // alignSelf={item.type === 0 ? 'flex-end' : 'flex-start'}
              // bg={item.type === 1 ? 'white' : 'gray.300'}
              m={1}
              rounded={'xl'}>
              <Text fontFamily={'B Yekan'}>{item.recentText}</Text>
            </Box>
          ))}
        </ScrollView>
      </View>
      <View pl={2} pr={2} flex={0.1} bg={'white'}>
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
                  to: route.params.id,
                  from: socket.id,
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
    </NativeBaseProvider>
  );
};
export default Chat;
