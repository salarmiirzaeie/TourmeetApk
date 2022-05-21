import React, { useState } from "react";
import {
    NativeBaseProvider,
    View,
    HStack,

    IconButton,
    Heading,

    StatusBar, Button

} from "native-base";
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { AddForm2 } from "../components/Add/AddForm2";
export const AddTour = () => {
  
    return (
        <NativeBaseProvider>
            <StatusBar />
            <View display={"flex"} flexDirection="column" flex={0.93}>
                <HStack
                    justifyContent="space-between"
                    zIndex={9999}
                    bg="gray.100"
                    w="100%"
                    p={3}
                    borderRadius={10}

                >
                    <HStack borderRadius="full">
                        <IconButton
                            onPress={() => navigation.goBack()}
                            _icon={{
                                as: Ionicons,
                                name: "refresh",
                                color: "gray.400",
                                size: 7,
                            }}
                        />
                    </HStack>
                    <HStack alignSelf="center"  >
                        <Heading> ایجاد تور</Heading>
                    </HStack>

                    <HStack borderRadius="full">
                        <IconButton

                            _icon={{
                                as: AntDesign,
                                name: "save",
                                color: "gray.400",
                                size: 7,
                            }}
                        />
                    </HStack>
                </HStack>


                <AddForm2 />
               

            </View>





        </NativeBaseProvider >
    );
};
