import React from 'react';
import axios from 'axios';
import {Formik} from 'formik';

import {
  Center,
  NativeBaseProvider,
  View,
  VStack,
  FormControl,
  Heading,
  Box,
  Input,
  Button,
  Link,
  IconButton,
  Menu,
  Divider,
  Text,
  Circle,
  Color,
} from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
 const SignUp = ({navigation}) => {
  const onSubmit = data => {
    console.log(data);
    axios
      .post('http://192.168.43.153:3333/api/account/signup', data)
      .then(function (response) {
        if (response.data.telno != '') {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <NativeBaseProvider>
      <View bg={'white'} flex={1} w={'100%'} alignItems={'center'}>
        <View w={'100%'} flex={0.1}>
          <Center>
            <Menu
              mr={10}
              bg="white"
              marginRight={120}
              defaultIsOpen={false}
              w="150"
              trigger={triggerProps => {
                return (
                  <Box flexDirection={'row'}>
                    <Text>English</Text>
                    <IconButton
                      _icon={{
                        as: AntDesign,
                        name: 'down',
                        color: 'gray.400',
                        size: 3,
                        mt: -1,
                      }}
                      {...triggerProps}
                    />
                  </Box>
                );
              }}>
              <Menu.Item>Arial</Menu.Item>
              <Menu.Item>Nunito Sans</Menu.Item>
              <Menu.Item>Roboto</Menu.Item>
            </Menu>
          </Center>
        </View>
        <View w={'100%'} flex={0.8}>
          <Center flex={1}>
            <Text fontSize={50} bold={true}>
              Tourino
            </Text>
            <View w={'80%'}>
              <Formik
                initialValues={{
                  name: '',
                  pass: '',
                  telno: '',
                  bio: '',
                  avatarUrl:
                    'https://i.pinimg.com/564x/c0/fc/f1/c0fcf164efd9a75a5f7d8065d4365451.jpg',
                }}
                onSubmit={onSubmit}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <VStack width="100%" space={4}>
                    <FormControl isRequired>
                      {/* <FormControl.Label>User Name</FormControl.Label> */}
                      <Input
                        bgColor={'gray.100'}
                        onBlur={handleBlur('name')}
                        placeholder="name"
                        onChangeText={handleChange('name')}
                        value={values.name}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        bgColor={'gray.100'}
                        onBlur={handleBlur('telno')}
                        placeholder="UserName"
                        onChangeText={handleChange('telno')}
                        value={values.telno}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <Input
                        bgColor={'gray.100'}
                        onBlur={handleBlur('pass')}
                        placeholder="Password"
                        onChangeText={handleChange('pass')}
                        value={values.pass}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        bgColor={'gray.100'}
                        placeholder="ConfirmPassword"
                      />
                    </FormControl>

                    <Button onPress={handleSubmit} bg="skyblue">
                      Submit
                    </Button>
                    <Divider />
                    <View
                      mt={2}
                      p={1}
                      flexDirection="row"
                      justifyContent="space-between">
                      <Circle size={50} shadow={7} bg="#00A693">
                        <AntDesign name="google" size={30} />
                      </Circle>

                      <Circle size={50} shadow={7} bg="#00A693">
                        <AntDesign name="github" size={30} />
                      </Circle>
                      <Circle size={50} shadow={7} bg="#00A693">
                        <Feather name="linkedin" size={30} />
                      </Circle>
                    </View>
                  </VStack>
                )}
              </Formik>
            </View>
          </Center>
        </View>
        <View w="100%" flex={0.1}>
          <View flex={0.5}></View>
          <Divider />

          <View flex={0.5} pl={10}>
            <Text>cd</Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default SignUp