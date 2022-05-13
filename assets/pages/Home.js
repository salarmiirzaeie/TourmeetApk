import React from "react";
import {
    Center,
    NativeBaseProvider,
    View,
    HStack,
    Text,

    Box,
    Heading,
    VStack,
    Divider,
    StatusBar,

} from "native-base";
import { HomeCategories } from "../components/Home/HomeCategories";
import { PopularCompanies } from "../components/Home/PopularCompanies";
import { FontAwesome5 } from '@expo/vector-icons';
import { HomeHeader } from "../components/Home/HomeHeader";
import { SearchInput } from "../components/Home/SearchInput";


export const Home = () => {


    return (
        <NativeBaseProvider>
            <StatusBar />
            <View bg="#8F95D3" flex={1}>
                <HomeHeader />
                <View flex={0.08}>
                    <Center>
                        <Heading color="#023436">
                            طبیعت گردی با <Heading color="white">بقچه </Heading>
                        </Heading>
                    </Center>
                </View>
                <View pt={2} flex={0.06}>
                    <Center>
                        <SearchInput />
                    </Center>
                </View>
                <View bg="#F1F5F2" p={3} mt={30} borderRadius={25} shadow={3} flex={0.9}>


                    <View zIndex={-100} flex={0.3}>
                        <VStack space={2}>
                            <HStack space={2} justifyContent="center">
                                <View h={60} flex={0.5} bg="white" flexDirection="row" rounded="md" shadow={3} >
                                    <Box flex={0.3}>
                                        <Center p={2} mt="2">
                                            <FontAwesome5 name="mountain" size={24} color="#00A693" />
                                        </Center>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box p={2} flex={0.7}>
                                        <Text mt={1} fontSize={20}>کوه</Text>
                                    </Box>

                                </View>
                                <View h={60} flex={0.5} bg="white" flexDirection="row" rounded="md" shadow={3} >
                                    <Box flex={0.3}>
                                        <Center p={2} mt="2">
                                            <FontAwesome5 name="mountain" size={24} color="#00A693" />

                                            {/* <Image
                                                rounded="md"
                                                h="full"
                                                alt="ee"
                                                source={img2}
                                            /> */}
                                        </Center>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box p={2} flex={0.7}>
                                        <Text mt={1} fontSize={20}>کویر</Text>
                                    </Box>

                                </View>



                            </HStack>
                            <HStack space={2} justifyContent="center">
                                <View h={60} flex={0.5} bg="white" flexDirection="row" rounded="md" shadow={3} >
                                    <Box flex={0.3}>
                                        <Center p={2} mt="2">
                                            <FontAwesome5 name="mountain" size={24} color="#00A693" />

                                            {/* <Image
                                                rounded="md"
                                                h="full"
                                                alt="ee"
                                                source={img3}
                                            /> */}
                                        </Center>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box p={2} flex={0.7}>
                                        <Text mt={1} fontSize={20}>دریا</Text>
                                    </Box>

                                </View><View h={60} flex={0.5} bg="white" flexDirection="row" rounded="md" shadow={3} >
                                    <Box flex={0.3}>
                                        <Center p={2} mt="2">
                                            <FontAwesome5 name="mountain" size={24} color="#00A693" />

                                            {/* <Image
                                                rounded="md"
                                                h="full"
                                                alt="ee"
                                                source={img4}
                                            /> */}
                                        </Center>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box p={2} flex={0.7}>
                                        <Text mt={1} fontSize={20}>جنگل</Text>
                                    </Box>

                                </View>
                            </HStack>
                        </VStack>


                    </View>
                    <View pt={0} flex={0.4}>
                        <HomeCategories />
                    </View>

                    <View pt={3} flex={0.24}>
                        <Center pb={5}>
                            <Heading fonts color="#023436">
                                محبوبترین <Heading color="#00A693">کمپ ها </Heading>
                            </Heading>
                        </Center>

                        <PopularCompanies />
                    </View>
                </View>

            </View>






        </NativeBaseProvider>
    );
};
