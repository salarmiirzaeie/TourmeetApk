import React from 'react';
import {
  IconButton,
  HStack,
  Heading,
  Center,
  useToast,
  Pressable,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DastNevis} from '../assets/fonts/DastNevis.otf';
 const HomeHeader = ({toTop}) => {
  const toast = useToast();
  return (
    <HStack p={2} justifyContent="space-between" w="100%">
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
      <HStack pr={2}>
        <Pressable onPress={() => toTop()} justifyContent={'center'} ml={2}>
          <Text fontFamily={"B Yekan"} color="white" fontFamily={"DastNevis"} fontSize="3xl">
            تورمیت
          </Text>
        </Pressable>
      </HStack>
    </HStack>
  );
};
export default React.memo(HomeHeader)