import React from 'react';
import {IconButton, HStack, Heading, Center, useToast, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const HomeHeader = ({toTop}) => {
  const navigation = useNavigation();
  const toast = useToast();
  return (
    <HStack p={2} justifyContent="space-between" w="100%">
      <HStack>
        <Pressable onPress={()=>toTop()} justifyContent={"center"} ml={2}>
          <Heading color="white">Tourino</Heading>
        </Pressable>
      </HStack>
      <HStack>
        <IconButton
          onPress={() =>
            toast.show({
              title: 'به زودی',
              placement: 'top',
            })
          }
          _icon={{
            as: FontAwesome,
            name: 'send',
            color: 'white',
            size: 7,
          }}
        />
      </HStack>
    </HStack>
  );
};
