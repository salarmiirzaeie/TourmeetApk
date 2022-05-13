import React from "react";
import {  Input,Circle, PresenceTransition } from "native-base";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export const SearchInput = () => {
  const navigation  = useNavigation();

  return (
    <Input
    isFocused={false} showSoftInputOnFocus={false}  onFocus={()=>{navigation.navigate("SearchPage")
    }}
      w="80%"
      h="full"
      bg="white"
      borderColor="white"
      shadow={4}
      textAlign="center"
      variant="rounded"
      InputRightElement={
        <PresenceTransition
          visible={true}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 300,
            },
          }}
        >
          <Circle bg="#8F95D3" size={9} >
            <AntDesign name="search1" color="white" size={20} />
          </Circle>
        </PresenceTransition>
      }
    />
  );
};
