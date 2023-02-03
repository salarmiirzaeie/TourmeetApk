import React, {useState, useEffect} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

Feather
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userProfile} from '../../services/userServices';
import {NoLogin} from '../../components/NoLogin';
import {useDispatch} from 'react-redux';
import {profileMode} from '../../state-management/action/profileModeAction';
import {Formik} from 'formik';

export const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclose();
  const logedin = useSelector(state => state.profileModeState);
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const eff = () => {
    setEditMode(false);
  };
  useEffect(() => {
    if (logedin) {
      getData().then(tok => {
        userProfile(tok).then(res => {
          setProfile(res.data);
        });
      });
    }
  }, [logedin]);
  const toast = useToast();

  if (logedin) {
    return (
      <NativeBaseProvider>
        <View bg={'skyblue'} flex={1}>
          <View
            flexDirection={'row'}
            justifyContent="space-between"
            w="100%"
            p={1}
            flex={0.2}>
            

            <View>
              <IconButton
                onPress={onOpen}
                _icon={{
                  as: Feather,
                  name: 'align-left',
                  color: 'white',
                  size: 7,
                }}
              />
            </View>
            <View>
              <IconButton
                onPress={() =>
                  toast.show({
                    title: 'به زودی',
                    placement: 'top',
                  })
                }
                _icon={{
                  as: AntDesign,
                  name: 'qrcode',
                  color: 'white',
                  size: 7,
                }}
              />
            </View>
          </View>
          <View bg="white" borderTopRadius={30} p={2} shadow={3} flex={0.8}>
            <Box
              size="170"
              mt={-85}
              bg="red.100"
              rounded="full"
              alignSelf="center">
              <Image
                rounded="full"
                h={'full'}
                W={'full'}
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                }}
              />
            </Box>
            <Formik
              initialValues={{
                name: profile.name,
                bio: profile.description,
                phone: profile.phoneNumber,
                email: profile.email,
              }}
              onSubmit={values => {
                console.log(values);
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
                <View pr={3} flex={1}>
                  <View h={75} flexDirection="row">
                    <View
                      justifyContent={'center'}
                      alignItems="center"
                      flex={0.15}>
                      <Ionicons name="person" size={24} color="black" />
                    </View>
                    <View flex={0.85}>
                      <View justifyContent={'center'} flex={0.5}>
                        <Text fontFamily={"B Yekan"}>Name</Text>
                      </View>

                      <View justifyContent={'center'} flex={0.5}>
                        {editMode ? (
                          <Input value={profile.name} />
                        ) : (
                          <Text fontFamily={"B Yekan"} bold>{profile.name}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <Divider bg={'gray.100'} />

                  <View h={75} flexDirection="row">
                    <View
                      justifyContent={'center'}
                      alignItems="center"
                      flex={0.15}>
                      <AntDesign name="phone" size={24} color="black" />
                    </View>
                    <View flex={0.85}>
                      <View justifyContent={'center'} flex={0.5}>
                        <Text fontFamily={"B Yekan"}>Phone</Text>
                      </View>
                      <View justifyContent={'center'} flex={0.5}>
                        {editMode ? (
                          <Input value={profile.phoneNumber} />
                        ) : (
                          <Text fontFamily={"B Yekan"} bold>{profile.phoneNumber}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <View h={75} flexDirection="row">
                    <View
                      justifyContent={'center'}
                      alignItems="center"
                      flex={0.15}>
                      <AntDesign name="mail" size={24} color="black" />
                    </View>
                    <View flex={0.85}>
                      <View justifyContent={'center'} flex={0.5}>
                        <Text fontFamily={"B Yekan"}>email</Text>
                      </View>
                      <View justifyContent={'center'} flex={0.5}>
                        {editMode ? (
                          <FormControl isRequired>
                            <Input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={profile.email}
                            />
                          </FormControl>
                        ) : (
                          <Text fontFamily={"B Yekan"} bold>{profile.email}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <View h={75} flexDirection="row">
                    <View
                      justifyContent={'center'}
                      alignItems="center"
                      flex={0.15}>
                      <AntDesign name="infocirlce" size={24} color="black" />
                    </View>
                    <View flex={0.85}>
                      <View justifyContent={'center'} flex={0.5}>
                        <Text fontFamily={"B Yekan"}>Bio</Text>
                      </View>
                      <View justifyContent={'center'} flex={0.5}>
                        {editMode ? (
                          <Text fontFamily={"B Yekan"}Area mt={10} value={profile.description} />
                        ) : (
                          <Text fontFamily={"B Yekan"} bold>{profile.description}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  <Divider bg={'gray.100'} />
                  <View h={50} mt={50} flexDirection="row">
                    <View flex={0.15}></View>

                    {editMode ? (
                      <View
                        justifyContent={'space-between'}
                        flexDirection={'row'}
                        flex={0.85}>
                        <Button flex={0.5} onPress={handleSubmit}>
                          ثبت
                        </Button>
                        <Button
                          flex={0.5}
                          colorScheme={'danger'}
                          onPress={() => eff()}>
                          لغو
                        </Button>
                      </View>
                    ) : (
                      ''
                    )}
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item
              endIcon={<Icon as={AntDesign} size="6" name="edit" />}
              alignItems="flex-end"
              onPress={() => {
                setEditMode(true);
                onClose();
              }}>
              ویرایش پروفایل
            </Actionsheet.Item>
            <Actionsheet.Item
              endIcon={<Icon as={MaterialIcons} size="6" name="bookmark" />}
              alignItems="flex-end"
              onPress={() => {
                navigation.navigate('Saveds');
              }}>
              ذخیره ها
            </Actionsheet.Item>
            <Actionsheet.Item
              endIcon={<Icon as={MaterialIcons} size="6" name="settings" />}
              alignItems="flex-end"
              onPress={() => {
                navigation.navigate('settings');
              }}>
              {'تنظیمات '}
            </Actionsheet.Item>
            <Actionsheet.Item
              endIcon={<Icon as={Entypo} size="6" name="aircraft" />}
              alignItems="flex-end"
              onPress={() => {
                navigation.navigate('MyTours');
              }}>
              تورهای من
            </Actionsheet.Item>
            <Actionsheet.Item
              endIcon={<Icon as={SimpleLineIcons} size="6" name="logout" />}
              alignItems="flex-end"
              onPress={() => {
                AsyncStorage.removeItem('@storage_Key');
                dispatch(profileMode(false));
              }}>
              {'خروج'}
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </NativeBaseProvider>
    );
  } else return <NoLogin />;
};
