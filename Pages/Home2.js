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
  ScrollView,
} from 'native-base';
import {HomeCategories} from '../components/Home/HomeCategories';
import {PopularCompanies} from '../components/Home/PopularCompanies';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HomeHeader} from '../components/Home/HomeHeader';
import {SearchInput} from '../components/Home/SearchInput';

import React from 'react';

export const Home2 = () => {
  return (
    <NativeBaseProvider>
      <StatusBar />

      <View bg="#8F95D3" flex={1}>
        <HomeHeader />
          <ScrollView>
            <View h={750}>
            {/* <View>
              <Center>
                <Heading color="#023436">
                  طبیعت گردی با <Heading color="white">بقچه </Heading>
                </Heading>
              </Center>
            </View> */}
            <View pt={2} flex={0.06}>
              <Center>
                <SearchInput />
              </Center>
            </View>
            <View
              bg="#F1F5F2"
              p={3}
              mt={30}
              borderTopRadius={25}
              shadow={3}
              flex={1}>
              <View zIndex={-100}>
                <VStack space={2}>
                  <HStack space={2} justifyContent="center">
                    <View
                      h={60}
                      flex={0.5}
                      bg="white"
                      flexDirection="row"
                      rounded="md"
                      shadow={3}>
                      <Box flex={0.3}>
                        <Center p={2} mt="2">
                          <FontAwesome5
                            name="mountain"
                            size={24}
                            color="#00A693"
                          />
                        </Center>
                      </Box>
                      <Divider orientation="vertical" />
                      <Box p={2} flex={0.7}>
                        <Text mt={1} fontSize={20}>
                          کوه
                        </Text>
                      </Box>
                    </View>
                    <View
                      h={60}
                      flex={0.5}
                      bg="white"
                      flexDirection="row"
                      rounded="md"
                      shadow={3}>
                      <Box flex={0.3}>
                        <Center p={2} mt="2">
                          <FontAwesome5
                            name="mountain"
                            size={24}
                            color="#00A693"
                          />

                        
                        </Center>
                      </Box>
                      <Divider orientation="vertical" />
                      <Box p={2} flex={0.7}>
                        <Text mt={1} fontSize={20}>
                          کویر
                        </Text>
                      </Box>
                    </View>
                  </HStack>
                  <HStack space={2} justifyContent="center">
                    <View
                      h={60}
                      flex={0.5}
                      bg="white"
                      flexDirection="row"
                      rounded="md"
                      shadow={3}>
                      <Box flex={0.3}>
                        <Center p={2} mt="2">
                          <FontAwesome5
                            name="mountain"
                            size={24}
                            color="#00A693"
                          />

                        
                        </Center>
                      </Box>
                      <Divider orientation="vertical" />
                      <Box p={2} flex={0.7}>
                        <Text mt={1} fontSize={20}>
                          دریا
                        </Text>
                      </Box>
                    </View>
                    <View
                      h={60}
                      flex={0.5}
                      bg="white"
                      flexDirection="row"
                      rounded="md"
                      shadow={3}>
                      <Box flex={0.3}>
                        <Center p={2} mt="2">
                          <FontAwesome5
                            name="mountain"
                            size={24}
                            color="#00A693"
                          />

                        
                        </Center>
                      </Box>
                      <Divider orientation="vertical" />
                      <Box p={2} flex={0.7}>
                        <Text mt={1} fontSize={20}>
                          جنگل
                        </Text>
                      </Box>
                    </View>
                  </HStack>
                </VStack>
              </View>
              <View h={280} pt={25}>
                <HomeCategories />
              </View>

              <View borderRadius={"md"} h={150} bg="red.100" mt={0}>
                <Center flex={1}>
                <Box>Its Banner</Box>

                </Center>
              </View>
              <View borderRadius={"md"} h={90}  mt={5}>
                <PopularCompanies/>
              </View>
              
            </View>
            </View>
            
          </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
