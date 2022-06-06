import React from 'react';
import {
  HStack,
  Box,
  NativeBaseProvider,
  Image,
  ScrollView,
  View,
} from 'native-base';

export const Galleryprofile = gallery => {
  const res = gallery.gallery.gallery;
  if (res == undefined) return <View></View>;
  else
    return (
      <NativeBaseProvider>
       <View>
          
        </View>
      </NativeBaseProvider>
    );
};
