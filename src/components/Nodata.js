import {Box, NativeBaseProvider, Spinner, Text} from 'native-base';
import React from 'react';

export const Nodata = ({status}) => {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        rounded="2xl"
        w={'full'}
        bg="#E8FDFF"
        justifyContent="center"
        textAlign={'center'}
        alignSelf={'center'}>
        {status === 0 ? (
          <Text fontFamily={'B Yekan'} textAlign="center">
            {'فعلاً توری برای این شهرموجودنیست!'}
          </Text>
        ) : (
          <Spinner />
        )}
      </Box>
    </NativeBaseProvider>
  );
};
