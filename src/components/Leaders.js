import {Circle, NativeBaseProvider, Image, View, Avatar} from 'native-base';
import React from 'react';

export const Leaders = () => {
  return (
    <NativeBaseProvider>
      <View flexDirection={"row"}>
        <Avatar
          zIndex={1}
          size={'xs'}
          
          source={{
            uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
          }}
        />
        <Avatar
          zIndex={2}
          size={'xs'}
          ml={-3}

          source={{
            uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
          }}
        />
        <Avatar
          zIndex={3}
          size={'xs'}
          ml={-3}

          source={{
            uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
          }}
        />
        <Avatar
          zIndex={3}
          size={'xs'}
          ml={-3}

          source={{
            uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
          }}
        />
      </View>
    </NativeBaseProvider>
  );
};
