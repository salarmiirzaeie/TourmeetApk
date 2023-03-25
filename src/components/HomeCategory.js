import {useNavigation} from '@react-navigation/native';
import {
  NativeBaseProvider,
  View,
  HStack,
  Text,
  VStack,
  Image,
  Pressable,
} from 'native-base';
import React from 'react';

const HomeCategory = () => {
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
                  uri: `https://api.tourmeet.ir/uploads/sea.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
                  uri: `https://api.tourmeet.ir/uploads/offroad.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
                  uri: `https://api.tourmeet.ir/uploads/mountain.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
                  uri: `https://api.tourmeet.ir/uploads/desert.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
                  uri: `https://api.tourmeet.ir/uploads/jungle.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
                  uri: `https://api.tourmeet.ir/uploads/historical.jpg`,
                }}
              />
              <Text
                fontFamily={'B Yekan'}
                bg={'gray.400'}
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
export default React.memo(HomeCategory);
