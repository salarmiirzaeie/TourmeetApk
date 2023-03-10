import React, {useState} from 'react';
import {
  Input,
  Circle,
  PresenceTransition,
  Button,
  Box,
  Text,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import {CityModal} from './CityModal';
import {useSelector} from 'react-redux';

export const SearchInput = ({setsate}) => {
  const navigation = useNavigation();
  let city = useSelector(state => state.cityState);
  return (
    <>
      <Input
        isFocused={false}
        showSoftInputOnFocus={false}
        onFocus={() => {
          navigation.navigate('SearchPage', {
            text: 'b',
          });
        }}
        w="90%"
        h="90%"
        bg="white"
        borderColor="white"
        shadow={4}
        textAlign="center"
        rounded={'xl'}
        InputLeftElement={
          <Button
            onPress={() => navigation.navigate('Provinces')}
            p={0}
            m={0}
            h="full"
            startIcon={
              <Feather style={{fontSize: 18, color: 'white'}} name="map-pin" />
            }
            w={'20%'}
            bg={'#24C2D8'}>
            <Text fontFamily={'B Yekan'} color={'white'}>
              {city.name}
            </Text>
          </Button>
        }
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
            }}>
            <Box bg="#24C2D8" justifyContent={'center'} rounded={'xl'} size={8}>
              <AntDesign
                style={{alignSelf: 'center'}}
                name="search1"
                color="white"
                size={20}
              />
            </Box>
          </PresenceTransition>
        }
      />
    </>
  );
};
