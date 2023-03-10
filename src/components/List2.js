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
import {formDate, persianDuration} from '../utils/helpers';
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
            <Image
              fallbackSource={{
                uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
              }}
              alt="thumbnil"
              flex={0.35}
              rounded={10}
              source={{
                uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.thumbnail[0]}`,
              }}
            />
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
                <Text fontFamily={'B Yekan'} color="black" textAlign={'right'}>
                  {item.price}
                  {'تومان'}
                </Text>
                <Text fontFamily={'B Yekan'} color="black" textAlign={'right'}>
                  {item.capacity - item.joinedUsers.length}
                  {'نفرباقی مانده'}
                </Text>
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
                    {formDate(item.createdAt)}
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
