import React, {useRef, useState} from 'react';
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
  AlertDialog,
  Spinner,
  Alert,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {login} from '../services/userServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';

const Login = ({navigation}) => {
  const [isOpen, setIsOpen] = useState({isOpen: false, message: ''});

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const [isload, setislpad] = useState(false);
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
            <Text fontFamily={'DastN'} fontSize={50} bold={true}>
              Tourino
            </Text>
            <View w={'80%'}>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                  setislpad(true);
                  setTimeout(async () => {
                    login(values).then(res => {
                      setislpad(false);

                      if (res.status === 207) {
                        storeData(res.data.token.toString());
                        dispatch(profileMode(true));
                        navigation.navigate('Profile');
                      } else {
                        setIsOpen({isOpen: true, message: res.data.message});

                        // alert(res.data.message);
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
                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('email')}
                      placeholder="Email"
                      onChangeText={handleChange('email')}
                      value={values.email}
                      isRequired
                      autoFocus
                      autoComplete="email"
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('password')}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      value={values.password}
                      type={'password'}
                      isRequired
                      autoComplete="password"
                    />

                    <Button
                      isDisabled={
                        !values.email || !values.password ? true : false
                      }
                      isLoading={isload}
                      onPress={handleSubmit}
                      bg="skyblue">
                      {'ورود'}
                    </Button>
                    <Link alignSelf={'flex-end'}>فراموشی رمز؟ </Link>
                    <Link
                      alignSelf={'flex-end'}
                      onPress={() => navigation.navigate('SignUp')}>
                      ثبت نام
                    </Link>

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

                      {/* <Circle size={50} shadow={7} bg="#00A693">
                        <AntDesign name="google" size={30} />
                      </Circle>

                      <Circle size={50} shadow={7} bg="#00A693">
                        <AntDesign name="github" size={30} />
                      </Circle>
                      <Circle size={50} shadow={7} bg="#00A693">
                        <Feather name="linkedin" size={30} />
                      </Circle> */}
                    </View>
                  </VStack>
                )}
              </Formik>
            </View>
          </Center>
        </View>
        {/* <View w="100%" flex={0.1}>
          <View flex={0.5}></View>
          <Divider />

          <View flex={0.5} pl={10}>
            <Text fontFamily={"B Yekan"}>cd</Text>
          </View>
        </View> */}
      </View>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen.isOpen}
        onClose={() => {
          onClose();
        }}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{''}</AlertDialog.Header>
          <AlertDialog.Body>
            <Center>{isOpen.message}</Center>
          </AlertDialog.Body>
          
        </AlertDialog.Content>
      </AlertDialog>
    </NativeBaseProvider>
  );
};
export default Login;
