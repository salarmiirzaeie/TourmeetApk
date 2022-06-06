import React from 'react';
import {
  Pressable,
  Text,
  ScrollView,
  Image,
  VStack,
  Box,
  HStack,
  View,
  Center,
  Divider,
  NativeBaseProvider,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const List = datas => {
  let dataa;
  if (datas.datas == undefined) {
    dataa = [{}];
  } else {
    dataa = datas.datas;
  }

  const navigation = useNavigation();
  if (datas.datas) {
    return (
      <NativeBaseProvider>
        <ScrollView flexDirection="column" showsVerticalScrollIndicator={false}>
          <VStack pl={2} pt={1} pr={2} space={1}>
            {dataa.map((data, i) => (
              <Pressable
                w="full"
                h="130"
                borderRadius={'lg'}
                bg="white"
                flexDirection="row"
                rounded="md"
                shadow={3}
                key={i}
                onPress={() =>
                  navigation.navigate('TourDet3', {
                    id: data.id,
                  })
                }
                p={1}>
                <View flex={0.4}>
                  <Image
                    rounded="md"
                    h="full"
                    w="full"
                    alt="ee"
                    source={{
                      uri: data.bannerUrl,
                    }}
                  />
                </View>

                <View flex={0.6} p={1} flexDirection={'column'}>
                  <View flex={0.7} flexDirection="column">
                    <View p={1} flexDirection="row" flex={0.5}>
                      <View
                        p={1}
                        alignItems={'center'}
                        flexDirection="column"
                        flex={0.1}>
                        <AntDesign name="heart" size={15} color="red" />

                        <Text color="black" fontSize={12} bold={true}>
                          {data.likeCount}
                        </Text>
                      </View>
                      <Text
                        flex={0.9}
                        fontSize={'lg'}
                        bold={true}
                        textAlign={'right'}>
                        {data.title}
                      </Text>
                    </View>
                    <View p={1} flex={0.5}>
                      <Text
                        color={'gray.500'}
                        fontSize={'md'}
                        textAlign={'right'}>
                        اوجامان کلاپ
                      </Text>
                    </View>
                  </View>

                  <View
                    flex={0.3}
                    flexDirection={'row'}
                    justifyContent={'space-between'}>
                    <View flexDirection={'row'} flex={0.3}>
                      <Center
                        justifyContent={'space-between'}
                        flexDirection={'row'}
                        m={'auto'}>
                        <Text fontSize={'xs'}> {data.description}</Text>
                      </Center>
                    </View>
                    <Divider orientation="vertical" />
                    <View flex={0.3}>
                      <Center m={'auto'}>{data.price}</Center>
                    </View>
                    <Divider orientation="vertical" />

                    <View flex={0.3}>
                      <Center m={'auto'}>{data.capacity}</Center>
                    </View>
                  </View>
                </View>
              </Pressable>
            ))}
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    );
  } else {
    return <NativeBaseProvider></NativeBaseProvider>;
  }
};
export default React.memo(List);
