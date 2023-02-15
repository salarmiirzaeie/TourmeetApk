import {NativeBaseProvider, Text} from 'native-base';
import React from 'react';

export const NotConnected = () => {
  return (
    <NativeBaseProvider>
      <Text fontFamily={'B Yekan'}>اینترنت متصل نیست</Text>
    </NativeBaseProvider>
  );
};
