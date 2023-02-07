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
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, Modal, Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const CityModal = ({visible, setvisible}) => {
  const {width: windowWidth} = Dimensions.get('window');

  //   const [visible, setvisible] = useState(false);

  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      onRequestClose={() => setvisible(false)}>
      <View flex={1}>
        <View
          flexDirection={'row'}
          justifyContent="space-between"
          bg={'red.200'}
          flex={0.08}
          px={5}>
          <AntDesign
            style={{alignSelf: 'center', fontSize: 20}}
            name="search1"
          />

          <Box
            flex={0.4}
            justifyContent="space-between"
            alignSelf={'center'}
            flexDirection={'row'}>
            <Text fontSize={20} fontFamily={'B Yekan'}>
              {'انتخاب شهر'}
            </Text>
            <IconButton
              size={'xs'}
              borderRadius="2xl"
              onPress={() => setvisible(false)}
              _icon={{
                as: AntDesign,
                name: 'right',
                size: 6,
                color: 'white',
              }}
            />
          </Box>
        </View>
        <View flex={0.9}>
          <ScrollView>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
            <Text>ss</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
