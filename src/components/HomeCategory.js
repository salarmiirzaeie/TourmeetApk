import {useNavigation} from '@react-navigation/native';
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
  Image,
  Pressable,
} from 'native-base';
import React from 'react';

export const HomeCategory = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View>
        <VStack space={7}>
          <HStack space={2} justifyContent="space-between">
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'sea',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                دریا
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'offroad',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/offroad.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                آفرودسواران
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'mountain',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/mountain.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                کوهنوردی
              </Text>
            </Pressable>
          </HStack>
          <HStack space={2} justifyContent="space-between">
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'desert',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/desert.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                کویرگردی
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'forest',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/jungle.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                طبیعت گردی
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SearchPage', {
                  text: 'historical',
                });
              }}
              h="100"
              w="30%"
              bg="white">
              <Image
                rounded="lg"
                h="full"
                W="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/historical.jpg`,
                }}
              />
              <Text
                bg={'gray.500'}
                color={'white'}
                textAlign={'center'}
                borderRadius={'lg'}>
                تاریخی
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};
