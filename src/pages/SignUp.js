import React, {useRef, useState} from 'react';
import {Formik} from 'formik';

import {
  Center,
  NativeBaseProvider,
  View,
  VStack,
  Input,
  Button,
  Divider,
  Text,
  AlertDialog,
  Link,
} from 'native-base';

import {login, register} from '../services/userServices';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';
// import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [isOpen, setIsOpen] = useState({isOpen: false, message: ''});

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);
  const [isload, setislpad] = useState(false);
  const dispatch = useDispatch();
  const storeData = async value => {
    try {
      AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };
  return (
    <NativeBaseProvider>
      <View bg={'white'} flex={1} w={'100%'} alignItems={'center'}>
        <View w={'100%'} flex={1}>
          <Center flex={1}>
            <Text fontFamily={'DastNevis'} fontSize={50}>
              تورمیت
            </Text>
            <View w={'80%'}>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  confirmPassword: '',
                  type:'tourist'
                }}
                onSubmit={(values, {setSubmitting}) => {
                  setislpad(true);

                  setTimeout(() => {
                    register(values).then(res => {
                      setislpad(false);
                      if (res.status === 201) {
                        login({
                          email: values.email,
                          password: values.password,
                        }).then(async result => {
                          if (result.status === 207) {
                            // dispatch(tokenMode(result.data.token.toString()));
                            await storeData(result.data.token.toString());

                            // await storeData(result.data.token.toString());

                            dispatch(profileMode(true));
                            navigation.navigate('Profile', {
                              pf: true,
                            });
                          }
                        });
                      } else {
                        setIsOpen({isOpen: true, message: res.data.message});
                      }
                    });

                    setSubmitting(false);
                  }, 1000);
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <VStack width="100%" space={4}>
                    {/* <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('name')}
                      placeholder="Name"
                      onChangeText={handleChange('name')}
                      value={values.name}
                    /> */}

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
                      bg="#24C2D8">
                      {'ثبت نام'}
                    </Button>
                    <Link
                      onPress={() => navigation.navigate('ForgetPassword')}
                      alignSelf={'flex-end'}>
                     {'فراموشی رمز؟'}
                    </Link>
                    <Link
                      alignSelf={'flex-end'}
                      onPress={() => navigation.navigate('Login')}>
                       {"ورود"}
                    </Link>
                    <Divider />
                    <View
                      mt={2}
                      p={1}
                      flexDirection="row"
                      justifyContent="space-between">
                      {/* <GoogleSigninButton style={{width: '100%'}} /> */}
                    </View>
                  </VStack>
                )}
              </Formik>
            </View>
          </Center>
        </View>
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
export default SignUp;
