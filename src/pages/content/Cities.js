import {
  NativeBaseProvider,
  FlatList,
  Pressable,
  Text,
  View,
  IconButton,
  Input,
  Icon,
  Divider,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, NativeModules} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getcities} from '../../services/postServices';
import {cityMode} from '../../state-management/action/cityAction';

export const Cities = ({route}) => {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  // const [visibleInput, setvisibleInput] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [serc, setserc] = useState(true);

  const [tours, setours] = useState([]);
  const [provinces, setprovinces] = useState([]);

  const searchTour = res => {
    let regex = new RegExp(res.text);

    setours(provinces.filter(item => regex.test(item.name)));
  };
  useEffect(() => {
    setserc(true);
    getcities(route.params.id).then(res => {
      if (res.status === 200) {
        setprovinces(res.data);
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View bg={'#24C2D8'} flexDirection="row" px={1} flex={0.08}>
          <Input
            onChange={q => {
              if (q.nativeEvent.text === '') {
                setserc(true);
              } else setserc(false);

              searchTour({text: q.nativeEvent.text});
            }}
            color="white"
            borderColor={'transparent'}
            placeholder="جستجو..."
            flex={0.99}
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="white"
                as={<MaterialIcons name="search" />}
              />
            }
          />
          <IconButton
            size={'xs'}
            onPress={() => navigation.goBack()}
            _icon={{
              as: AntDesign,
              name: 'right',
              size: 6,
              color: 'white',
            }}
          />
        </View>
        <View flex={0.9}>
          <FlatList
            data={serc ? provinces : tours}
            renderItem={({item}) => (
              <>
                <Pressable
                  onPress={() => {
                    dispatch(cityMode(item));

                    NativeModules.DevSettings.reload();

                    navigation.navigate('Home');
                  }}
                  px={3}
                  h={windowHeight / 15}
                  w={'full'}>
                  <View
                    mt={3}
                    flex={1}
                    flexDirection="row"
                    justifyContent="space-between">
                    <MaterialCommunityIcons
                      style={{fontSize: 20}}
                      name="map-marker-check-outline"
                    />

                    <Text fontFamily={'B Yekan'} textAlign={'right'}>
                      {item.name}
                    </Text>
                  </View>
                </Pressable>
                <Divider />
              </>
            )}
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
};
