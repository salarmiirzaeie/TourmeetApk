import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, View, useDisclose} from 'native-base';

import {ProfileHeader} from '../../components/ProfileHeader';
import {ProfileContent} from '../../components/ProfileContent';
import {getUser} from '../../services/postServices';
const UserProfile = ({route}) => {
  const {onOpen, onClose} = useDisclose();

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
        <ProfileHeader mode={'otheruser'} onOpen={() => onOpen()} />
        <ProfileContent mode={'otheruser'} profile={user} />
      </View>
    </NativeBaseProvider>
  );
};
export default UserProfile;
