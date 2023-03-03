import {Formik} from 'formik';
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,
  ScrollView,
  Text,
  Divider,
  Actionsheet,
  useDisclose,
  Input,
  Button,
  FormControl,
  TextArea,
  useToast,
  Icon,
} from 'native-base';
import React, {useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import Feather from 'react-native-vector-icons/Feather';
import {Alert} from 'react-native';
import { changePassword } from '../../services/userServices';

export const Security = ({route, navigation}) => {
  const [isload, setisload] = useState(false);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.12}>
          <DefaultHeader name={'امنیت '} />
        </View>
        <View p={1} flex={0.88}>
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            onSubmit={values => {
              setTimeout(() => {
                changePassword(values).then(res => {
                  Alert.alert(res.data.message);
                  setisload(false)
                });
              }, 500);
            }}>
            {({
              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,
            }) => (
              <View pl={6} flex={1}>
                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        رمزعبور
                      </Text>
                    </View>

                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('oldPassword')}
                        onChangeText={handleChange('oldPassword')}
                        value={values.oldPassword}
                        editable
                        type="password"
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <Feather name="unlock" size={24} color="black" />
                  </View>
                </View>
                <Divider bg={'gray.100'} />

                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        رمزعبورجدید
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('newPassword')}
                        onChangeText={handleChange('newPassword')}
                        value={values.newPassword}
                        editable
                        type="password"
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <Feather name="lock" size={24} color="black" />
                  </View>
                </View>
                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        تکراررمزعبورجدید
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('confirmPassword')}
                        onChangeText={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                        editable
                        type="password"
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <Feather name="lock" size={24} color="black" />
                  </View>
                </View>

                <Divider bg={'gray.100'} />
                <View h={50} mt={50} flexDirection="row">
                  <View
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    flex={0.85}>
                    <Button
                      isLoading={isload}
                      flex={0.5}
                      onPress={() => {
                        handleSubmit();
                        setisload(true);
                      }}>
                      ثبت
                    </Button>
                    <Button
                      flex={0.5}
                      colorScheme={'danger'}
                      onPress={() => navigation.navigate('Profile')}>
                      لغو
                    </Button>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
