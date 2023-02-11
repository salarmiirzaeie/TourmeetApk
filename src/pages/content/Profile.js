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
  CircleIcon,
  Circle,
  Pressable,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userProfile} from '../../services/userServices';
import {NoLogin} from '../../components/NoLogin';
import {useDispatch} from 'react-redux';
import {profileMode} from '../../state-management/action/profileModeAction';
import {GalleryModal} from '../../components/GalleryModal';
import {ProfileHeader} from '../../components/ProfileHeader';

export const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclose();
  const logedin = useSelector(state => state.profileModeState);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (logedin) {
      userProfile().then(res => {
        setProfile(res.data);
        console.log(res.data)
      });
    }
  },[route]);
  const toast = useToast();
  if (logedin) {
    return (
      <NativeBaseProvider>
        <View bg={'#24C2D8'} onTouchCancel={onClose} flex={1}>
          <ProfileHeader onOpen={() => onOpen()} />
          <View bg="white" borderTopRadius={30} shadow={3} flex={0.8}>
            <Box
              size="170"
              mt={-85}
              bg="red.100"
              bg="transparent"
              alignSelf="center">
              <GalleryModal images={profile.profilePhotos} />
            </Box>

            <View pl={6} flex={1}>
              <View h={75} flexDirection="row">
                <View flex={0.85}>
                  <View justifyContent={'center'} flex={0.5}>
                    <Text textAlign={'right'} fontFamily={'B Yekan'}>
                      نام
                    </Text>
                  </View>

                  <View justifyContent={'center'} flex={0.5}>
                    <Text textAlign={'right'} fontFamily={'B Yekan'} bold>
                      {profile.name}
                    </Text>
                  </View>
                </View>
                <View justifyContent={'center'} alignItems="center" flex={0.15}>
                  <Ionicons name="person" size={24} color="black" />
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
                    <Text textAlign={'right'} fontFamily={'B Yekan'} bold>
                      {profile.phoneNumber}
                    </Text>
                  </View>
                </View>
                <View justifyContent={'center'} alignItems="center" flex={0.15}>
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
                    <Text textAlign={'right'} fontFamily={'B Yekan'} bold>
                      {profile.email}
                    </Text>
                  </View>
                </View>
                <View justifyContent={'center'} alignItems="center" flex={0.15}>
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
                    <Text textAlign={'right'} fontFamily={'B Yekan'} bold>
                      {profile.description}
                    </Text>
                  </View>
                </View>
                <View justifyContent={'center'} alignItems="center" flex={0.15}>
                  <AntDesign name="infocirlce" size={24} color="black" />
                </View>
              </View>
              <Divider bg={'gray.100'} />
            </View>
          </View>
        </View>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Actionsheet.Item
              endIcon={<Icon as={AntDesign} size="6" name="edit" />}
              alignItems="flex-end"
              onPress={() => {
                navigation.navigate('EditProfile', {
                  profile: profile,
                });
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
              endIcon={<Icon as={Entypo} size="6" name="lock" />}
              alignItems="flex-end"
              onPress={() => {
                navigation.navigate('Security');
              }}>
              {'امنیت '}
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
