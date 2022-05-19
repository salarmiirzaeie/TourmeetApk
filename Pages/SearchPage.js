import { NativeBaseProvider, Input, VStack, Icon } from 'native-base';
import React from 'react'
import  MaterialIcons  from "react-native-vector-icons/MaterialIcons";

export const SearchPage = () => {
  return (
    <NativeBaseProvider>
      <VStack w="100%"p={2} space={5} alignSelf="center">
        <Input  autoFocus={true} placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} />
      </VStack>

    </NativeBaseProvider>
  );
}

