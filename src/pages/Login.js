import React from 'react';
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
import {login} from '../services/userServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';

 const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };
  return (
    <NativeBaseProvider>
      <View bg={'white'} flex={1} w={'100%'} alignItems={'center'}>
        <View w={'100%'} flex={0.1}>
          <Center>
            <Menu
              bg="white"
              mr={3}
              defaultIsOpen={false}
              w="190"
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
              <Menu.Group title="Free">
                <Menu.Item>Arial</Menu.Item>
                <Menu.Item>Nunito Sans</Menu.Item>
                <Menu.Item>Roboto</Menu.Item>
              </Menu.Group>
              <Divider mt="3" w="100%" />
              <Menu.Group title="Paid">
                <Menu.Item>SF Pro</Menu.Item>
                <Menu.Item>Helvetica</Menu.Item>
              </Menu.Group>
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
                initialValues={{email: '', password: ''}}
                // validate={values => {
                //   const errors = {};
                //   if (!values.email) {
                //     errors.email = 'Required';
                //   } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //       values.email,
                //     )
                //   ) {
                //     errors.email = 'Invalid email address';
                //   }
                //   return errors;
                // }}
                onSubmit={values => {
                  setTimeout(async () => {
                    login(values).then(res => {
                      if (res.status === 207) {
                        storeData(res.data.token.toString());
                        dispatch(profileMode(true));
                        navigation.navigate('Profile');
                      } else {
                        console.log(res.data.message);
                      }
                      // setSubmitting(false);
                    });
                  }, 200);
                }}>
                {({
                  values,

                  errors,

                  touched,

                  handleChange,

                  handleBlur,

                  handleSubmit,

                  isSubmitting,

                  /* and other goodies */
                }) => (
                  <VStack width="100%" space={4}>
                    <FormControl isRequired>
                      {/* <FormControl.Label>User Name</FormControl.Label> */}
                      <Input
                        bgColor={'gray.100'}
                        onBlur={handleBlur('email')}
                        placeholder="UserName"
                        onChangeText={handleChange('email')}
                        value={values.email}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      {/* <FormControl.Label>Password</FormControl.Label> */}
                      <Input
                        bgColor={'gray.100'}
                        onBlur={handleBlur('password')}
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        value={values.password}
                      />
                    </FormControl>

                    <Button onPress={handleSubmit} bg="skyblue">
                      Submit
                    </Button>
                    <Link>Forgot Password?</Link>
                    <Link onPress={() => navigation.navigate('SignUp')}>
                      SignUp
                    </Link>

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
export default Login