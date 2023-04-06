import React, {useState} from 'react';
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
  Link,
  Modal,
} from 'native-base';
import {Alert} from 'react-native';

import {login, register} from '../services/userServices';
import {useDispatch} from 'react-redux';
import {profileMode} from '../state-management/action/profileModeAction';
// import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {MatnModal} from '../components/MatnModal';

const SignUp = ({navigation}) => {
  const route = useRoute();
  const [showModal, setShowModal] = useState(false);
  const [isload, setislpad] = useState(false);
  const dispatch = useDispatch();
  const stormodal = () => {
    setShowModal(true);
  };
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
                  type: 'tourist',
                  username: '',
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
                            await storeData(result.data.token.toString());

                            dispatch(profileMode(true));
                            if (route.params !== undefined) {
                              navigation.navigate('TourDet3', {
                                id: route.params.id,
                              });
                            } else {
                              navigation.navigate('Profile', {
                                pf: true,
                              });
                            }
                          } else {
                            Alert.alert(result.data.message);
                          }
                        });
                      } else {
                        Alert.alert(res.data.message);
                      }
                    });

                    setSubmitting(false);
                  }, 1000);
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                  <VStack width="100%" space={4}>
                    <Input
                      isRequired
                      bgColor={'gray.100'}
                      onBlur={handleBlur('username')}
                      placeholder="نام کاربری"
                      onChangeText={handleChange('username')}
                      value={values.username}
                      textAlign={'center'}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('email')}
                      placeholder="ایمیل"
                      onChangeText={handleChange('email')}
                      value={values.email}
                      textAlign={'center'}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('password')}
                      placeholder="رمزعبور"
                      onChangeText={handleChange('password')}
                      value={values.password}
                      type={'password'}
                      textAlign={'center'}
                    />

                    <Input
                      bgColor={'gray.100'}
                      onBlur={handleBlur('confirmPassword')}
                      placeholder="تکراررمزعبور"
                      onChangeText={handleChange('confirmPassword')}
                      value={values.confirmPassword}
                      type={'password'}
                      textAlign={'center'}
                    />
                    <Button
                      isDisabled={
                        !values.email || !values.username || !values.password
                          ? true
                          : false
                      }
                      isLoading={isload}
                      onPress={handleSubmit}
                      bg="#24C2D8">
                      {'ثبت نام'}
                    </Button>
                    <View
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Link alignSelf={'flex-end'} onPress={() => stormodal()}>
                        {'سیاست حفظ حریم شخصی برنامه'}
                      </Link>
                      <Link
                        alignSelf={'flex-end'}
                        onPress={() => navigation.navigate('Login')}>
                        {'ورود'}
                      </Link>
                    </View>

                    <Divider />
                    <View>
                      <Text
                        fontFamily={'B Yekan'}
                        fontSize={10}
                        color={'gray.400'}
                        textAlign={'right'}>
                        قبل ثبت نام لطفا متن سیاست حفظ حریم شخصی برنامه رامطالعه
                        بفرمایید.
                      </Text>
                      {/* <GoogleSigninButton style={{width: '100%'}} /> */}
                    </View>
                  </VStack>
                )}
              </Formik>
            </View>
          </Center>
        </View>
      </View>
      <MatnModal
        showModal={showModal}
        setShowModal={() => setShowModal(false)}
      />
    </NativeBaseProvider>
  );
};
export default SignUp;
