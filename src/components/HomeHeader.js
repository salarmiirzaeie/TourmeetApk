import React from 'react';
import {IconButton, HStack, useToast, Pressable, Text} from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
const HomeHeader = ({toTop}) => {
  const toast = useToast();
  return (
    <HStack p={2} justifyContent="space-between" w="100%">
      <HStack>
        <IconButton
          onPress={() =>
            toast.show({
              title: 'درحال راه اندازی!',
              placement: 'top',
            })
            
          }
          _icon={{
            as: Octicons,
            name: 'inbox',
            color: 'white',
            size: 5,
          }}
        />
      </HStack>
      <HStack pr={2}>
        <Pressable onPress={() => toTop()} justifyContent={'center'} ml={2}>
          <Text
            fontFamily={'B Yekan'}
            color="white"
            fontFamily={'DastNevis'}
            fontSize="3xl">
            تورمیت
          </Text>
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default React.memo(HomeHeader);
