import React, { useState, useEffect } from "react";
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading

} from "native-base";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import { Profileabout } from "../components/Profile/Profileabout";
export const Profile = () => {
  const [dataa, setdata] = useState({});

  useEffect(() => {
    getcampinfo();
  }, []);
  const getcampinfo = () => {
    const apiUrl = "http://192.168.43.153:3333/api/organizer/find?id=3 ";
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {

          setdata(data);

        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <NativeBaseProvider >
      <View p={0} bg="#8F95D3" flex={1}>
        <HStack
          justifyContent="space-between"
          bg="transparent"
          w="100%"
          p={1}
          borderRadius={10}

        >
          <HStack borderRadius="full">
            <IconButton
              // onPress={console.log("f")}
              _icon={{
                as: AntDesign,
                name: "left",
                color: "white",
                size: 7,
              }}
            />
          </HStack>


          <HStack borderRadius="full">
            <IconButton

              _icon={{
                as: AntDesign,
                name: "upload",
                color: "white",
                size: 7,
              }}
            />
          </HStack>

        </HStack>
        <View bg="white" borderRadius={30} shadow={3} flex={1}>
          <Box size="79" mt={-9} bg="red.100" rounded="full" alignSelf="center">

            <Image
              rounded="full"
              h={20}
              W={20}
              alt="ee"
              source={{
                uri: "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg",
              }}
            />
          </Box>

          <Center>
            <Heading>Name</Heading>
            <Heading color="gray.300" size="md">I am Mona</Heading>

          </Center>
          <View bg="white"  flex={0.92}>



            <View h="full" >
              <Profileabout gallery={dataa.gallery}/>

            </View>


          </View>

        </View>

      </View>






    </NativeBaseProvider>
  );
};
