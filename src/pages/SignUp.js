import React, {useState} from 'react';
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
import {login, register} from '../services/userServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';

const SignUp = ({navigation}) => {
  const [isload, setislpad] = useState(false);
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
        <View w={'100%'} flex={1}>
          <Center flex={1}>
            <Text fontFamily={'B Yekan'} fontSize={50} bold={true}>
              Tourino
            </Text>
            <View w={'80%'}>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  type: 'tourist',
                }}
                onSubmit={(values, {setSubmitting}) => {
                  setislpad(true);

                  setTimeout(() => {
                    console.log(values);
                    register(values).then(res => {
                      setislpad(false);
                      if (res.status === 201) {
                        login({
                          email: values.email,
                          password: values.password,
                        }).then(res => {
                          if (res.status === 207) {
                            storeData(res.data.token.toString());
                            dispatch(profileMode(true));
                            navigation.navigate('Profile');
                          }
                        });
                      } else {
                        console.log(res.data.message);
                      }
                    });

                    setSubmitting(false);
                  }, 400);
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <VStack width="100%" space={4}>
                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('name')}
                      placeholder="Name"
                      onChangeText={handleChange('name')}
                      value={values.name}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('email')}
                      placeholder="Email"
                      onChangeText={handleChange('email')}
                      value={values.email}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('password')}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      value={values.password}
                      type={'password'}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('confirmPassword')}
                      placeholder="ConfirmPassword"
                      onChangeText={handleChange('confirmPassword')}
                      value={values.confirmPassword}
                      type={'password'}
                    />
                    <Button
                      isDisabled={
                        !values.email || !values.password ? true : false
                      }
                      isLoading={isload}
                      onPress={handleSubmit}
                      bg="skyblue">
                      {'ثبت نام'}
                    </Button>
                    <Divider />
                    <View
                      mt={2}
                      p={1}
                      flexDirection="row"
                      justifyContent="space-between">
                      <Button
                        w={'full'}
                        colorScheme="dark"
                        startIcon={<AntDesign name="google" />}>
                        ورودباگوگل
                      </Button>
                    </View>
                  </VStack>
                )}
              </Formik>
            </View>
          </Center>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
export default SignUp;
