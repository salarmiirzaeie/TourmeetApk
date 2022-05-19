import React, { useState, useEffect } from "react";
import {
    NativeBaseProvider,
    View,
    HStack,
    Image,
    Text,
    IconButton,
    Box,
    Divider,


} from "native-base";
import { StyleSheet } from "react-native";
import  AntDesign  from "react-native-vector-icons/AntDesign";

import { Profileabout } from "../components/Profile/Profileabout"
export const CampProfile = () => {


    return (
        <NativeBaseProvider bg="#F1F5F2">
            <View flex={1} bg="#8F95D3">
                <HStack
                    justifyContent="space-between"
                    bg="transparent"
                    w="100%"
                    p={1}
                    borderRadius={10}

                >
                    <HStack  borderRadius="full">
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


                    <HStack  borderRadius="full">
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
                <View flexDirection="row" p={4}>
                    <Box size="79" bg="red.100" rounded="full" >

                        <Image
                            rounded="full"
                            h={20}
                            W={20}
                            alt="ee"
                            source={{
                                uri: "https://i.pinimg.com/474x/65/07/5b/65075b3ed792f3cde894da9b549160bb.jpg",
                            }}
                        />
                    </Box>
                    <View flex={0.9} flexDirection="row" alignItems="center" justifyContent="space-between" ml={10} >
                        <Text color="white">50</Text>
                        <Divider h={10} orientation="vertical" />
                        <Text color="white">20</Text>
                        <Divider h={10} orientation="vertical" />
                        <Text color="white">60</Text>


                    </View>


                </View>

                <View bg="white" borderRadius={30} mt={0} zIndex={-50} w={405} flex={0.2} style={styles.container}></View>
                <View bg="white" zIndex={99} mt={-20} flex={0.78}>



                    <View h="full">
                        <Profileabout />

                    </View>


                </View>

            </View>






        </NativeBaseProvider>
    );
};
const styles = StyleSheet.create({
    container: { 
        transform: [{ rotate: "-7deg" }],
        
    },
});
