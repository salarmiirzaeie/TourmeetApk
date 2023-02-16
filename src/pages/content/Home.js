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
  Pressable,
} from 'native-base';

import React, {useEffect, useRef, useState} from 'react';
import {HomeHeader} from '../../components/HomeHeader';
import {SearchInput} from '../../components/SearchInput';
import {PopularTours} from '../../components/PopularTours';
import {PopularCompanies} from '../../components/PopularCompanies';
import {HomeCategory} from '../../components/HomeCategory';
import {useNavigation} from '@react-navigation/native';

export const Home = ({route}) => {
  const scroll = useRef(null);
  const navigation = useNavigation();
  // const [cit, setcit] = useState(0);
  // useEffect(() => {
  //   console.log('fgd');
  //   navigation.isFocused(true);
  // }, [cit]);
  return (
    <NativeBaseProvider>
      <View bg="#24C2D8" flex={1}>
        <HomeHeader
          toTop={() => {
            scroll.current.scrollTo({y: 0, animated: true});
          }}
        />
        <ScrollView ref={scroll}>
          <View h={780}>
            <View py={8} flex={0.06}>
              <Center>
                <SearchInput/>
              </Center>
            </View>
            <View
              bg="#F8F8F8"
              p={3}
              mt={0}
              borderTopRadius={25}
              shadow={3}
              flex={1}>
              <View h={250}>
                <HomeCategory />
              </View>
              <View
                px={1}
                w={'full'}
                justifyContent={'space-between'}
                mt={2}
                flexDirection="row-reverse">
                <Text fontSize={'md'} fontFamily={'B Yekan'} bold>
                  محبوب ترین تورها
                </Text>
                <Pressable
                  onPress={() => navigation.navigate('PopularToursPage')}>
                  <Text
                    fontSize={'sm'}
                    color={'gray.400'}
                    fontFamily={'B Yekan'}>
                    مشاهده همه
                  </Text>
                </Pressable>
              </View>

              <View h={250} mt={0}>
                <PopularTours />
              </View>
              <View
                px={1}
                w={'full'}
                justifyContent={'space-between'}
                mt={3}
                flexDirection="row-reverse">
                <Text fontSize={'md'} fontFamily={'B Yekan'} bold>
                  محبوب ترین گروه ها
                </Text>
                {/* <Text fontSize={'sm'} color={'gray.400'} fontFamily={'B Yekan'}>
                  مشاهده همه
                </Text> */}
              </View>

              <View borderRadius={'md'} mt={3} h={70}>
                <PopularCompanies />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
