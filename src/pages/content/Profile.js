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

import {useSelector} from 'react-redux';
import {userProfile} from '../../services/userServices';
import {NoLogin} from '../../components/NoLogin';
import {useDispatch} from 'react-redux';
import {profileMode} from '../../state-management/action/profileModeAction';
import {ProfileHeader} from '../../components/ProfileHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProfileContent} from '../../components/ProfileContent';

export const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclose();
  const logedin = useSelector(state => state.profileModeState);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (logedin) {
      userProfile().then(res => {
        setProfile(res.data);
      });
    }
  }, [route]);
  if (logedin) {
    return (
      <NativeBaseProvider>
        <View bg={'#24C2D8'} onTouchCancel={onClose} flex={1}>
          <ProfileHeader mode={'myprofile'} onOpen={() => onOpen()} />
          <ProfileContent mode={'myprofile'} profile={profile} />
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
                dispatch(profileMode(false));
                // dispatch(tokenMode(''));
                AsyncStorage.setItem('@storage_Key', '');
              }}>
              {'خروج'}
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </NativeBaseProvider>
    );
  } else return <NoLogin />;
};
