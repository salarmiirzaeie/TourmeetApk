import {Image, NativeBaseProvider, Text, View} from 'native-base';
import React from 'react';

export const SplashScreen = () => {
  return (
    <NativeBaseProvider>
      <View bg={'white'} flex={1} justifyContent="center">
        <View flexDirection={'row'} justifyContent="center">
          <View>
            <Image
              source={require('../assets/images/splash.png')}
              alt="splash"
            />
            <Text
              textAlign={'center'}
              mt={3}
              fontSize="lg"
              fontFamily={'DastNevis'}>
              با تورمیت خاطره بساز :)
            </Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
