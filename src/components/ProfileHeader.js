import { IconButton, View } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';

export const ProfileHeader = ({onOpen}) => {
  return (
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
