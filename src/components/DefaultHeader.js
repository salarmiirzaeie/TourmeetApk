import {
  HStack,
  IconButton,
  Menu,
  Pressable,
  Box,
  HamburgerIcon,
  Divider,
  NativeBaseProvider,
  Text,
  View,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export const DefaultHeader = name => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <HStack
        justifyContent="space-between"
        zIndex={99}
        bg="skyblue"
        w="100%"
        p={2}
        flex={1}
        flexDirection="row"
        borderRadius={10}>
        <IconButton
          onPress={() => navigation.goBack()}
          _icon={{
            as: AntDesign,
            name: 'left',
            color: 'white',
            size: 7,
            shadow: 5,
          }}
        />
        <View pr={5} justifyContent={'center'}>
          <Text fontSize={15} textAlign="center">
            {name.name}
          </Text>
        </View>
        <Text>{''}</Text>
      </HStack>
    </NativeBaseProvider>
  );
};
