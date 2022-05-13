import React from "react";
import { IconButton, HStack, Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';

export const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <HStack p={2} justifyContent="space-between" w="100%" >

      <HStack>
        <Center ml={2}>
          <Heading color="white">Tourino</Heading>

        </Center>

      </HStack>
      <HStack>

        <IconButton
          onPress={() => navigation.navigate("Direct")}

          _icon={{
            as: FontAwesome,
            name: "send",
            color: "white",
            size: 7,

          }}
        />


      </HStack>
    </HStack>
  );
};
