import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  Badge,
  Box,
  FlatList,
  Image,
  NativeBaseProvider,
  Pressable,
  Text,
  View,
} from 'native-base';
import { formDate2, persianDuration, persianStatus} from '../utils/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const List2 = ({datas}: any) => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <FlatList
        scrollEventThrottle={1}
        data={datas}
        keyExtractor={(item, i) => String(i)}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('TourDet', {
                id: item._id,
              })
            }
            h={initialLayout.height / 5.8}
            rounded={10}
            flexDirection={'row'}
            my={0.5}
            mx={2}
            px={1}
            bg="white"
            py={1}>
            <Box flex={0.35}>
              {item.status === 'closed' ? (
                <Box
                  p={1}
                  bg="transparent"
                  zIndex={12}
                  w="full"
                  h={'full'}
                  justifyContent="flex-end"
                  position={'absolute'}>
                  <Badge
                    rounded={'xl'}
                    opacity={0.8}
                    colorScheme="danger"
                    alignSelf={'center'}
                    w={'70%'}>
                    {persianStatus(item.status)}
                  </Badge>
                </Box>
              ) : null}

              <Image
                w={'full'}
                h="full"
                zIndex={10}
                fallbackSource={{
                  uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                }}
                alt="thumbnil"
                rounded={10}
                source={{
                  uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.thumbnail[0]}`,
                }}
              />
            </Box>

            <View flex={0.65} p={2}>
              <View
                flex={0.4}
                flexDirection="row"
                justifyContent={'space-between'}>
                <Badge rounded={'2xl'}>
                  <Text
                    fontFamily={'B Yekan'}
                    color={'gray.400'}
                    fontSize="sm"
                    textAlign={'right'}>
                    {persianDuration(item.durationTime)}
                  </Text>
                </Badge>
                <Text
                  fontFamily={'B YekanBold'}
                  color="black"
                  textAlign={'right'}
                  fontSize={15}>
                  {item.title}
                </Text>
              </View>
              <View flex={0.6}>
                <Box alignSelf={'flex-end'} flexDirection={'row'}>
                  <Text
                    mx={1}
                    alignSelf="center"
                    fontSize={12}
                    fontFamily={'B Yekan'}
                    color="gray.400">
                    {'تومان'}
                  </Text>
                  <Text fontSize={15} fontFamily={'B Yekan'} color="black">
                    {item.price}
                  </Text>
                </Box>
                <Box alignSelf={'flex-end'} flexDirection={'row'}>
                  {item.capacity - item.joinedUsers.length === 0 ? (
                    <Badge mt={1} rounded={'xl'} colorScheme={'danger'}>
                      {'تکمیل ظرفیت'}
                    </Badge>
                  ) : (
                    <View flexDirection={'row'}>
                      <Text
                        mx={1}
                        fontSize={12}
                        mt={1}
                        fontFamily={'B Yekan'}
                        color="black"
                        alignSelf={'center'}
                        textAlign={'right'}>
                        نفرباقی مانده
                      </Text>
                      <Text
                        fontSize={15}
                        mt={1}
                        fontFamily={'B YekanBold'}
                        color="gray.400"
                        style={{
                          textDecorationLine: 'underline',
                          textDecorationStyle: 'solid',
                          textDecorationColor: '#000',
                        }}
                        textAlign={'right'}>
                        {item.capacity - item.joinedUsers.length}
                      </Text>
                    </View>
                  )}
                </Box>

                <View flexDirection={'row'} pt={1}>
                  <MaterialCommunityIcons
                    name="clock-time-three-outline"
                    style={{fontSize: 15}}
                    color={'#24C2D8'}
                  />
                  <Text
                    fontFamily={'B Yekan'}
                    color="gray.400"
                    textAlign={'right'}>
                    {formDate2(item.createdAt)}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </NativeBaseProvider>
  );
};
export default List2;
