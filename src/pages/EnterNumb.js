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
  HStack,
} from 'native-base';

import {useRoute} from '@react-navigation/native';
import {recievecode} from '../services/userServices';
import {Alert} from 'react-native';

const EnterNumb = ({navigation}) => {
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
                initialValues={{code: ''}}
                onSubmit={values => {
                  recievecode({id: route.params.id, rnumb: values.code}).then(
                    res => {
                      if (res.status === 200) {
                        navigation.navigate('ChangePassword', {
                          token: res.data.token,
                        });
                      }
                      else{
                        Alert.alert(res.data.message)
                      }
                    },
                  );
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
                      bgColor={'transparent'}
                      onBlur={handleBlur('code')}
                      isRequired
                      onChangeText={handleChange('code')}
                      keyboardType={'numeric'}
                      value={values.code}
                      w="90%"
                      borderColor={'transparent'}
                      fontSize="xl"
                      letterSpacing={40}
                      max
                      focusOutlineColor={'transparent'}
                      alignSelf={'center'}
                    />
                    <HStack mt={-5} alignSelf={'center'} space={2}>
                      <Divider w={'15%'} />
                      <Divider w={'15%'} />
                      <Divider w={'15%'} />
                      <Divider w={'15%'} />
                      <Divider w={'15%'} />
                    </HStack>
                    <Button onPress={handleSubmit} bg="#24C2D8">
                      {'ورود'}
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
export default EnterNumb;
