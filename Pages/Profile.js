import React, { useState, useEffect } from "react";
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,useDisclose,Actionsheet,Text, Button

} from "native-base";
import  AntDesign  from "react-native-vector-icons/AntDesign";
import  Ionicons  from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux'

import { Profileabout } from "../components/Profile/Profileabout";
export const Profile = ({navigation}) => {
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
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

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
          <HStack>
            <IconButton
              // onPress={console.log("f")}
              _icon={{
                as: AntDesign,
                name: "logout",
                color: "white",
                size: 7,
              }}
            />
          </HStack>


          <HStack>
            <IconButton
            onPress={onOpen}

              _icon={{
                as: Ionicons,
                name: "menu-outline",
                color: "white",
                size: 8,
              }}
            />
          </HStack>

        </HStack>
        <View bg="white" borderTopRadius={30} shadow={3} flex={1}>
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

      <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item onPress={()=>navigation.navigate("Settings")}>Settings</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>




    </NativeBaseProvider>
  );


  // return (
  //   <NativeBaseProvider >
  //     <View p={0}  flex={1}>
  //       <HStack
  //         justifyContent="space-between"
  //         bg="transparent"
  //         w="100%"
  //         p={1}
  //         borderRadius={10}

  //       >
  //         <HStack>
  //           {/* <IconButton
  //             onPress={console.log("f")}
  //             _icon={{
  //               as: AntDesign,
  //               name: "left",
  //               color: "white",
  //               size: 7,
  //             }}
  //           /> */}
  //         </HStack>


  //         <HStack>
  //           <IconButton
  //           onPress={onOpen}

  //             _icon={{
  //               as: Ionicons,
  //               name: "menu-outline",
  //               color: "white",
  //               size: 8,
  //             }}
  //           />
  //         </HStack>

  //       </HStack>
  //       <Center>
  //       <Button onPress={()=>navigation.navigate("Login")}>Login</Button>

  //       </Center>
  //     </View>

  //     <Center>
  //     <Actionsheet isOpen={isOpen} onClose={onClose}>
  //       <Actionsheet.Content>
  //         <Box w="100%" h={60} px={4} justifyContent="center">
  //           <Text fontSize="16" color="gray.500" _dark={{
  //           color: "gray.300"
  //         }}>
  //             Albums
  //           </Text>
  //         </Box>
  //         <Actionsheet.Item>Delete</Actionsheet.Item>
  //         <Actionsheet.Item onPress={()=>navigation.navigate("Settings")}>Settings</Actionsheet.Item>
  //         <Actionsheet.Item>Play</Actionsheet.Item>
  //         <Actionsheet.Item>Favourite</Actionsheet.Item>
  //         <Actionsheet.Item>Cancel</Actionsheet.Item>
  //       </Actionsheet.Content>
  //     </Actionsheet>
  //   </Center>




  //   </NativeBaseProvider>
  // );

}


  

