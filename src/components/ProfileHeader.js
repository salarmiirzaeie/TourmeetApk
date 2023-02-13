import {IconButton, View} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';

export const ProfileHeader = ({onOpen, mode}) => {
  return (
    <View
      flexDirection={'row'}
      justifyContent="space-between"
      w="100%"
      p={1}
      flex={0.2}>
      <View display={mode == 'myprofile' ? 'flex' : 'none'}>
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
      <View display={mode == 'myprofile' ? 'flex' : 'none'}>
        <IconButton
          //   onPress={() =>
          //     toast.show({
          //       title: 'به زودی',
          //       placement: 'top',
          //     })
          //   }
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
