import {NativeBaseProvider, Text, View} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const NotConnected = () => {
  return (
    <NativeBaseProvider>
      <View flex={1} justifyContent="center">
        <View flexDirection={'row'} justifyContent="center">
          <View>
            <MaterialCommunityIcons style={{fontSize:50,alignSelf:"center",color:"#24C2D8"}} name="connection" />

            <Text fontFamily={'B Yekan'}>اینترنت متصل نیست!</Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
