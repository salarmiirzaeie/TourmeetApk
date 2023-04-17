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
<<<<<<< HEAD
              با تورمیت خاطره بساز :)
=======
              با تورمیت خواطره بساز :)
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
            </Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
