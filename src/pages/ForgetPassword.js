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
  Alert,
} from 'native-base';

import {forgetPassword} from '../services/userServices';

const ForgetPassword = ({navigation}) => {
  

  
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
                initialValues={{email: ''}}
                onSubmit={values => {
                  setTimeout(async () => {
                    forgetPassword(values).then(res => {
                      if (res.status === 200) {
                        navigation.navigate('EnterNumb', {
                          id: res.data.userId,
                        });
                      } else {
                        Alert.alert(res.data.message);
                      }
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
                      placeholder="UserName or Email"
                      onChangeText={handleChange('email')}
                      value={values.email}
                      isRequired
                      autoComplete="email"
                    />

                    <Button
                      isDisabled={!values.email ? true : false}
                      onPress={handleSubmit}
                      bg="#24C2D8">
                      {'ثبت'}
                    </Button>

                    <Divider />
                    <View
                      mt={2}
                      p={1}
                      flexDirection="row"
                      justifyContent="space-between">
                      {/* <GoogleSigninButton
                        onPress={() => signIn()}
                        style={{width: '100%'}}
                      /> */}
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
export default ForgetPassword;
