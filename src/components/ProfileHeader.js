import {useNavigation} from '@react-navigation/native';
import {IconButton, View} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';

export const ProfileHeader = ({onOpen, mode, onshare}) => {
  const navigation = useNavigation();
  return (
    <View
      flexDirection={'row'}
      justifyContent="space-between"
      w="100%"
      p={1}
      flex={0.2}>
      <View display={mode === 'myprofile' || 'camp' ? 'flex' : 'none'}>
        {mode === 'camp' ? (
          <IconButton
            onPress={() => onshare()}
            _icon={{
              as: Feather,
              name: 'share',
              color: 'white',
              size: 7,
            }}
          />
        ) : (
          <IconButton
            display={mode === 'otheruser' ? 'none' : 'flex'}
            onPress={onOpen}
            _icon={{
              as: Feather,
              name: 'align-left',
              color: 'white',
              size: 7,
            }}
          />
        )}
      </View>
      <View>
        {mode === 'myprofile' ? (
          <IconButton
            _icon={{
              as: AntDesign,
              name: 'qrcode',
              color: 'white',
              size: 7,
            }}
          />
        ) : (
          <IconButton
            onPress={() => navigation.goBack()}
            _icon={{
              as: AntDesign,
              name: 'right',
              color: 'white',
              size: 7,
            }}
          />
        )}
      </View>
    </View>
  );
};
