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
} from 'native-base';

import {useRoute} from '@react-navigation/native';
import {reserPassword} from '../services/userServices';
import {Alert} from 'react-native';

const ChangePassword = ({navigation}) => {
  const [isOpen, setIsOpen] = useState({isOpen: false, message: ''});

  const onClose = () => setIsOpen(false);
  const route = useRoute();
  const cancelRef = useRef(null);

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
                initialValues={{newPassword: '', confirmPassword: ''}}
                onSubmit={values => {
                  values = {...values, token: route.params.token};
                  reserPassword(values).then(res => {
                    if (res.status === 200) {
                      navigation.navigate('Login');
                    } else {
                      Alert.alert(res.data.message);
                    }
                  });
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
                      onBlur={handleBlur('newPassword')}
                      placeholder="password"
                      onChangeText={handleChange('newPassword')}
                      value={values.newPassword}
                      type="password"
                      isRequired
                    />
                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('confirmPassword')}
                      placeholder="confirmpassword"
                      onChangeText={handleChange('confirmPassword')}
                      value={values.confirmPassword}
                      isRequired
                      type="password"
                    />
                    <Button onPress={handleSubmit} bg="#24C2D8">
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
export default ChangePassword;
