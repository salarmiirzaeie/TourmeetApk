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
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import {Profileabout} from '../components/Profile/Profileabout';

export const Profile = ({navgation, route}) => {
  const [dataa, setdata] = useState({});
  const data = route.params;
  useEffect(() => {
    getdetails();
  }, []);
  const getdetails = () => {
    axios
      .post('http://192.168.43.153:3333/api/organization/find', data)
      .then(function (response) {
        if (response.data !== undefined) {
          setdata(response.data);
        }

        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <NativeBaseProvider>
    
        <View bg={'#8F95D3'} flex={1}>
          <HStack
            justifyContent="space-between"
            bg="transparent"
            w="100%"
            p={1}
            borderRadius={10}>
            <HStack>
              <IconButton
                _icon={{
                  as: AntDesign,
                  name: 'left',
                  color: 'white',
                  size: 7,
                }}
              />
            </HStack>

            <HStack>
              <IconButton
                // onPress={onOpen}
                _icon={{
                  as: Ionicons,
                  name: 'bookmark',
                  color: 'white',
                  size: 8,
                }}
              />
            </HStack>
          </HStack>
          <View bg="white" borderTopRadius={30} shadow={3} flex={1}>
            <Box
              size="79"
              mt={-9}
              bg="red.100"
              rounded="full"
              alignSelf="center">
              <Image
                rounded="full"
                h={20}
                W={20}
                alt="ee"
                source={{
                  uri: dataa.logoUrl,
                }}
              />
            </Box>

            <Center mt={1}>
              <Heading>{dataa.organizationName}</Heading>
              <Heading color="gray.300" size="md"></Heading>
            </Center>
          <Profileabout />

          </View>
        </View>
    
    </NativeBaseProvider>
  );
};
