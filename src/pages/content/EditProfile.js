import {Formik} from 'formik';
import {
  NativeBaseProvider,
  View,
  Text,
  Divider,
  Input,
  Button,
  TextArea,
} from 'native-base';
import React, {useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {editProfile} from '../../services/userServices';
import { Alert } from 'react-native';

export const EditProfile = ({route, navigation}) => {
  let profile = route.params.profile;
  const [isload, setisload] = useState(false);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.12}>
          <DefaultHeader name={'ویرایش پروفایل'} />
        </View>
        <View p={1} flex={0.88}>
          <Formik
            initialValues={{
              name: profile.name,
              description: profile.description,
              phoneNumber: profile.phoneNumber,
              email: profile.email,
              username: profile.username,
            }}
            onSubmit={values => {
              setTimeout(() => {
                editProfile(values).then(res => {
                  setisload(false);
                  if (res.status === 200) {
                    navigation.navigate('Profile', {
                      pf: true,
                    });
                  } else {
                    Alert.alert(res.data.message)
                  
                  }
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
                        نام کاربری
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('username')}
                        placeholder="نام کاربری"
                        onChangeText={handleChange('username')}
                        value={values.username}
                        editable
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <AntDesign name="user" size={24} color="black" />
                  </View>
                </View>
                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        نام
                      </Text>
                    </View>

                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('name')}
                        placeholder="نام"
                        onChangeText={handleChange('name')}
                        value={values.name}
                        editable
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <FontAwesome name="angellist" size={24} color="black" />
                  </View>
                </View>
                <Divider bg={'gray.100'} />

                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        تلفن
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('phoneNumber')}
                        placeholder="تلفن"
                        onChangeText={handleChange('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType={'numeric'}
                        editable
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <AntDesign name="phone" size={24} color="black" />
                  </View>
                </View>
                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        ایمیل
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <Input
                        onBlur={handleBlur('email')}
                        placeholder="ایمیل"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        editable
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <AntDesign name="mail" size={24} color="black" />
                  </View>
                </View>

                <View h={75} flexDirection="row">
                  <View flex={0.85}>
                    <View justifyContent={'center'} flex={0.5}>
                      <Text textAlign={'right'} fontFamily={'B Yekan'}>
                        درباره
                      </Text>
                    </View>
                    <View justifyContent={'center'} flex={0.5}>
                      <TextArea
                        textAlign={'right'}
                        mt={5}
                        onBlur={handleBlur('description')}
                        placeholder="درباره"
                        onChangeText={handleChange('description')}
                        value={values.description}
                        editable
                      />
                    </View>
                  </View>
                  <View
                    justifyContent={'center'}
                    alignItems="center"
                    flex={0.15}>
                    <AntDesign name="infocirlce" size={24} color="black" />
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
