import {IconButton, View} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';

export const ProfileHeader = ({onOpen, mode, onshare}) => {
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
      <View display={mode === 'myprofile' ? 'flex' : 'none'}>
        <IconButton
          
          _icon={{
            as: AntDesign,
            name: 'qrcode',
            color: 'white',
            size: 7,
          }}
        />
      </View>
    </View>
  );
};
