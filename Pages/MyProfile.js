import React, {useState, useEffect} from 'react';
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,
  ScrollView,
  Text,
  Divider,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export const MyProfile = ({navgation, route}) => {
  return (
    <NativeBaseProvider>
      <View bg={'#8F95D3'} flex={1}>
        <View
          flexDirection={'row'}
          justifyContent="space-between"
          w="100%"
          p={1}
          flex={0.2}>
          <View>
            <IconButton
              _icon={{
                as: AntDesign,
                name: 'qrcode',
                color: 'white',
                size: 7,
              }}
            />
          </View>

          <View>
            <IconButton
              // onPress={onOpen}
              _icon={{
                as: AntDesign,
                name: 'menu-fold',
                color: 'white',
                size: 7,
              }}
            />
          </View>
        </View>
        <View bg="white" borderTopRadius={30} p={2} shadow={3} flex={0.8}>
          <Box
            size="170"
            mt={-85}
            bg="red.100"
            rounded="full"
            alignSelf="center">
            <Image
              rounded="full"
              h={'full'}
              W={'full'}
              alt="ee"
              source={{
                uri: 'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
              }}
            />
          </Box>

          <View flex={1}>
            <View flex={0.05}></View>

            <View flex={0.2} flexDirection="row">
              <View justifyContent={'center'} alignItems="center" flex={0.15}>
                <Ionicons name="person" size={24} color="black" />
              </View>
              <View flex={0.85}>
                <View justifyContent={'center'} flex={0.2}>
                  <Text>Name</Text>
                </View>
                <View justifyContent={'center'} flex={0.2}>
                  <Text bold={true}>SalarMirzaeie</Text>
                </View>
                <View justifyContent={'center'} flex={0.6}>
                  <Text>
                    SalarMirzaeidddddddddddddddddddddddddddddddddddddddddddde
                  </Text>
                </View>
              </View>
            </View>
            <Divider bg={"gray.100"} />
            <View flex={0.15} flexDirection="row">
              <View justifyContent={'center'} alignItems="center" flex={0.15}>
              <AntDesign name="infocirlce" size={24} color="black" />
                                          </View>
              <View flex={0.85}>
                <View justifyContent={'center'} flex={0.5}>
                  <Text>Bio</Text>
                </View>
                <View justifyContent={'center'} flex={0.5}>
                  <Text bold={true}>I am Legend</Text>
                </View>
               
              </View>
            </View>
            <Divider bg={"gray.100"} />
            <View flex={0.15} flexDirection="row">
              <View justifyContent={'center'} alignItems="center" flex={0.15}>
              <AntDesign name="phone" size={24} color="black" />
                            </View>
              <View flex={0.85}>
                <View justifyContent={'center'} flex={0.5}>
                  <Text>Phone</Text>
                </View>
                <View justifyContent={'center'} flex={0.5}>
                  <Text bold={true}>09222541680</Text>
                </View>
               
              </View>
            </View>
            
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
