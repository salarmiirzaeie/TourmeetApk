import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, View,useDisclose, ScrollView} from 'native-base';

import {ProfileHeader} from '../../components/ProfileHeader';
import {ProfileContent} from '../../components/ProfileContent';
import {getUser} from '../../services/postServices';
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
