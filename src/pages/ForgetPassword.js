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

import {forgetPassword, login} from '../services/userServices';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPassword = ({navigation}) => {
  const [isOpen, setIsOpen] = useState({isOpen: false, message: ''});

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);
  const dispatch = useDispatch();
  const [isload, setislpad] = useState(false);
  const storeData = async value => {
    try {
      AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   hostedDomain: '', // specifies a hosted domain restriction
  //   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //   accountName: '', // [Android] specifies an account name on the device that should be used
  //   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  //   openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  //   profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  // });
  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log('cancel');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('progress');
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('notavailabe');
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //       console.log('حطا');
  //     }
  //   }
  // };
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
                      }
                      else{
                        Alert.alert(res.data.message)
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
                      isLoading={isload}
                      onPress={handleSubmit}
                      bg="#24C2D8">
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
export default ForgetPassword;
