import {
  NativeBaseProvider,
  Box,
  FlatList,
  Image,
  Pressable,
  useDisclose,
  Spinner,
  Text,
  View,
  IconButton,
  Menu,
  HamburgerIcon,
  ScrollView,
  Input,
  Icon,
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, Modal, Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {cityMode} from '../state-management/action/cityAction';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CityModal = ({visible, setvisible}) => {
  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
  const data = ['Tehran', 'Tabriz', 'Alborz'];
  // const [visibleInput, setvisibleInput] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [serc, setserc] = useState(true);

  const [tours, setours] = useState([]);

  const searchTour = res => {
    let regex = new RegExp(res.text);

    setours(data.filter(item => regex.test(item)));
  };
  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      onRequestClose={() => setvisible(false)}>
      <View flex={1}>
        <View bg={'skyblue'} flexDirection="row" px={1} flex={0.08}>
          <Input
            onChange={q => {
              if (q.nativeEvent.text === '') {
                setserc(true);
              } else setserc(false);

              searchTour({text: q.nativeEvent.text});
            }}
            placeholder="جستجو..."
            // width="100%"
            // borderRadius="4"
            flex={0.99}
            fontSize="14"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
          />
          <IconButton
            size={'xs'}
            onPress={() => setvisible(false)}
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
            data={serc ? data : tours}
            renderItem={({item}) => (
              <Pressable
                my={1}
                justifyContent="center"
                bg={'gray.300'}
                onPress={() => {
                  dispatch(cityMode(item));
                  setvisible(false);

                  navigation.navigate('Home', {
                    pf: Math.random(100),
                  });
                }}
                px={3}
                h={windowHeight / 15}
                w={'full'}>
                <Text textAlign={'right'}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};
