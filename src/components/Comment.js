import {View, Text} from 'native-base';
import React from 'react';

export const Comment = () => {
  return (
    <View
      px={1}
      py={2}
      borderRadius={'lg'}
      style={{borderBottomColor:'red'}}
      bg={'white'}>
      <Text color={'gray.400'} textAlign={'right'}>
        تورچندروزه هست؟
      </Text>
    </View>
  );
};
