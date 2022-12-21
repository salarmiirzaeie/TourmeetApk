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

import React, {useRef} from 'react';
import {HomeHeader} from '../../components/HomeHeader';
import {SearchInput} from '../../components/SearchInput';
import {PopularTours} from '../../components/PopularTours';
import {PopularCompanies} from '../../components/PopularCompanies';
import {HomeCategory} from '../../components/HomeCategory';

export const Home = () => {
  const scroll = useRef(null);
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
              <View h={280} pt={0}>
                <Text color={'dark.400'}>محبوب ترین تورها</Text>
                <PopularTours />
              </View>
              <View borderRadius={'md'} h={90} mt={5}>
                <PopularCompanies />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
