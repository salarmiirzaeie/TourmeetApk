import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  FlatList,
  Image,
  NativeBaseProvider,
  Pressable,
  Text,
  View,
} from 'native-base';
import {formDate} from '../utils/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
            style={{
              height: initialLayout.height / 5.8,
              borderRadius: 10,
              flexDirection: 'row',
              marginVertical: 1,
              marginHorizontal: 5,
              backgroundColor: '#F8F8F8',
              paddingVertical: 1,
              paddingHorizontal: 5,
            }}>
            <Image
              alt="thumbnil"
              style={{flex: 0.35, borderRadius: 10}}
              source={{
                uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.thumbnail[0]}`,
              }}
            />
            <View
              style={{
                flex: 0.65,
                flexDirection: 'column',
                padding: 7,
              }}>
              <View style={{flex: 0.4}}>
                <Text
                bold
                  fontFamily={'B Yekan'}
                  style={{color: 'black', textAlign: 'right', fontSize: 15}}>
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  flex: 0.6,
                }}>
                <Text
                  fontFamily={'B Yekan'}
                  style={{color: 'black', textAlign: 'right'}}>
                  {item.price}
                  {'تومان'}
                </Text>
                <Text
                  fontFamily={'B Yekan'}
                  style={{color: 'black', textAlign: 'right'}}>
                  {item.capacity - item.joinedUsers.length}
                  {'نفرباقی مانده'}
                </Text>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                  <FontAwesome5
                    name="calendar-alt"
                    style={{fontSize: 15}}
                    color={'#24C2D8'}
                  />
                  <Text
                    fontFamily={'B Yekan'}
                    style={{
                      color: 'black',
                      textAlign: 'right',
                      color: 'gray',
                    }}>
                    {formDate(item.date)}
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
