import {
  HStack,
  IconButton,
  
  NativeBaseProvider,
  Text,
  View,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';

 const DefaultHeader = name => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <HStack
        justifyContent="space-between"
        zIndex={99}
        bg="#24C2D8"
        w="100%"
        p={2}
        // flex={1}
        flexDirection="row"
        borderRadius={10}>
        <Text fontFamily={'B Yekan'}>{''}</Text>

        <View pl={5} justifyContent={'center'}>
          <Text
            color={'white'}
            fontFamily={'B Yekan'}
            fontSize={15}
            textAlign="center">
            {name.name}
          </Text>
        </View>
        <IconButton
          onPress={() => navigation.goBack()}
          _icon={{
            as: AntDesign,
            name: 'right',
            color: 'white',
            size: 7,
            shadow: 5,
          }}
        />
      </HStack>
    </NativeBaseProvider>
  );
};
export default React.memo(DefaultHeader)