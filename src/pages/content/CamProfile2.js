import React, {useEffect, useState} from 'react';
import {userProfile} from '../../services/userServices';
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

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {ProfileHeader} from '../../components/ProfileHeader';
import {ProfileContent} from '../../components/ProfileContent';
import {getUser} from '../../services/postServices';
import {Linking, Share} from 'react-native';
import {onShare} from '../../utils/helpers';
const CampProfile2 = ({route}) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const [user, setuser] = useState({});
  useEffect(() => {
    getUser(route.params.id).then(res => {
      if (res.status === 200) {
        setuser(res.data);
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <View bg={'#24C2D8'} onTouchCancel={onClose} flex={1}>
        <ProfileHeader
          onshare={() => onShare({name: user.name, desc: user.description})}
          mode={'camp'}
          onOpen={() => onOpen()}
        />
        <ProfileContent rate={user.rate} mode={'camp'} profile={user} />
      </View>
    </NativeBaseProvider>
  );
};
export default CampProfile2;
