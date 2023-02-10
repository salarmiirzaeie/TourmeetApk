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

import React, {useEffect, useRef, useState} from 'react';
import {HomeHeader} from '../../components/HomeHeader';
import {SearchInput} from '../../components/SearchInput';
import {PopularTours} from '../../components/PopularTours';
import {PopularCompanies} from '../../components/PopularCompanies';
import {HomeCategory} from '../../components/HomeCategory';


export const Home = ({route}) => {
  const scroll = useRef(null);

  useEffect(() => {
    console.log('fgd');
  }, [route]);
  return (
    <NativeBaseProvider>
      <View bg="skyblue" flex={1}>
        <HomeHeader
          toTop={() => {
            scroll.current.scrollTo({y: 0, animated: true});
          }}
        />
        <ScrollView ref={scroll}>
          <View h={800}>
            <View py={8} flex={0.06}>
              <Center>
                <SearchInput />
              </Center>
            </View>
            <View
              bg="#F1F5F2"
              p={3}
              mt={0}
              borderTopRadius={25}
              shadow={3}
              flex={1}>
              <HomeCategory />
              <Text color={'dark.400'}>محبوب ترین تورها</Text>

              <View h={250} pt={3}>
                <PopularTours />
              </View>
              <Text color={'dark.400'} pb={2}>
                محبوب ترین کمپ ها
              </Text>

              <View borderRadius={'md'} h={90}>
                <PopularCompanies />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
