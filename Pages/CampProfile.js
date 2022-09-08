import React, {useState, useRef} from 'react';
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,
  // ScrollView,
  Text,
  Divider,
} from 'native-base';
import {Animated, ScrollView} from 'react-native';
import List from '../components/Explore/List';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Gallery}from "../assets/Components/Gallery"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const CampProfile = ({navigation, route}) => {
  const Tab = createMaterialTopTabNavigator();
  const DATA = [
    {
      id: 1,
      title: 'The Hunger Games',
    },
    {
      id: 2,
      title: 'Harry Potter and the Order of the Phoenix',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
    },
    {
      id: 5,
      title: 'Twilight',
    },
    {
      id: 6,
      title: 'The Book Thief',
    },
    {
      id: 7,
      title: 'The Chronicles of Narnia',
    },
    {
      id: 8,
      title: 'Animal Farm',
    },
    {
      id: 9,
      title: 'Gone with the Wind',
    },
    {
      id: 10,
      title: 'The Shadow of the Wind',
    },
    {
      id: 11,
      title: 'The Fault in Our Stars',
    },
    {
      id: 12,
      title: "The Hitchhiker's Guide to the Galaxy",
    },
    {
      id: 13,
      title: 'The Giving Tree',
    },
    {
      id: 14,
      title: 'Wuthering Heights',
    },
    {
      id: 15,
      title: 'The Da Vinci Code',
    },
  ];
  const offset = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 200;
  const insets = useSafeAreaInsets();

  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 0],
    extrapolate: 'clamp',
  });
  const [pad,setpad]=useState(250)
  return (
    <NativeBaseProvider>
      <View bg={'#8F95D3'} flex={1}>
        <View
          flexDirection={'row'}
          justifyContent="space-between"
          w="100%"
          p={1}
          >
          <View>
            <IconButton
              onPress={() => navigation.goBack()}
              _icon={{
                as: AntDesign,
                name: 'left',
                color: 'white',
                size: 7,
              }}
            />
          </View>

          <View>
            <IconButton
              // onPress={onOpen}
              _icon={{
                as: Feather,
                name: 'more-vertical',
                color: 'white',
                size: 7,
              }}
            />
          </View>
        </View>
      

        <View mt={0} flex={1}>
          <Animated.View
            style={{
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              height: headerHeight,
              backgroundColor: '#8F95D3',
              marginTop: 0,
              justifyContent: 'center',
            }}>
            <View
              shadow={7}
              style={{
                flex: 0.7,
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 10,
                width: '90%',
              }}>
              <View style={{flex: 0.4}}>
                <Image
                  // style={{transform: [{translateY: headerHeight-200}]}}
                  rounded="md"
                  h={'full'}
                  W={'full'}
                  alt="ee"
                  mt={-3}
                  source={{
                    uri: 'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
                  }}
                />
              </View>
              <View flexDirection={'column'} p={2} flex={0.6}>
                <View flex={0.5}>
                  <View justifyContent={'center'} flex={0.5}>
                    <Text>Bio</Text>
                  </View>
                  <View justifyContent={'center'} flex={0.5}>
                    <Text bold={true}>I am Legend</Text>
                  </View>
                </View>
                <View flexDirection={'row'} flex={0.5}>
                  <View justifyContent={'center'} flex={0.5}>
                    <Text>Bio</Text>
                  </View>
                  <View justifyContent={'center'} flex={0.5}>
                    <Text bold={true}>I am Legend</Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'white',
              lazy: true,
              tabBarStyle: {
                backgroundColor: '#8F95D3',
                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
                marginTop: headerHeight,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
              },
              tabBarIndicatorStyle: {
                backgroundColor: 'transparent',
              },
            }}>
            <Tab.Screen
              name="Tours"
              children={() => (
                <ScrollView
                  style={{flex: 1, backgroundColor: 'white'}}
                  contentContainerStyle={{
                    // alignItems: 'center',
                    marginTop: pad,
                    // paddingHorizontal: 20,
                  }}
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={16}
                  onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: offset}}}],
                    {useNativeDriver: false},
                  )}>
                  <List datas={DATA} />
                </ScrollView>
              )}
            />

            <Tab.Screen
              name="Gallery"
              children={() => (
                <ScrollView
                style={{flex: 1, backgroundColor: 'white'}}
                contentContainerStyle={{
                  // alignItems: 'center',
                  paddingTop: pad,
                  // paddingHorizontal: 20,
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: offset}}}],
                  {useNativeDriver: false},

                )}>

                  <Gallery/>
              </ScrollView>
              )}
            />
          </Tab.Navigator>
        </View>
      </View>
      {/* </View> */}
    </NativeBaseProvider>
  );
};
