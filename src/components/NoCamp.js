import {Box, Text} from 'native-base';
import React from 'react';

export const NoCamp = () => {
  return (
    <Box
      flex={1}
      rounded="2xl"
      w={'full'}
      bg="#E8FDFF"
      justifyContent="center"
      textAlign={'center'}
      alignSelf={'center'}>
      <Text fontFamily={'B Yekan'} textAlign="center">
        {'فعلاً گروهی برای این شهرموجودنیست!'}
      </Text>
    </Box>
  );
};
