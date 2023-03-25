import {useNavigation} from '@react-navigation/native';
import {
  Button,
  HStack,
  NativeBaseProvider,
  Text,
  View,
} from 'native-base';
import React from 'react';

export const NoLogin = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center">
        <View
          w={'80%'}
          p={10}
          borderRadius={'2xl'}
          alignSelf="center"
          bg={'white'}
          shadow={'5'}>
          <Text fontFamily={"B Yekan"} textAlign={'center'}>لطفاواردحساب کاربری خودشوید.</Text>
          <HStack space={1} pt={5} justifyContent={'center'}>
            <Button
              bg={'gray.400'}
              onPress={() => navigation.navigate('Login')}>

              ورود
            </Button>
            <Button
              bg={'#24C2D8'}
              onPress={() => navigation.navigate('SignUp')}>
              ثبت نام
            </Button>
          </HStack>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
