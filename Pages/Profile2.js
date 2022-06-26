import {ScrollView, View, Text, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {AnimatedHeader} from '../assets/Components/AnimatedHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export const Profile2 = () => {
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
  const Tab = createMaterialTopTabNavigator();
  const HEADER_HEIGHT = 200;
  const insets = useSafeAreaInsets();

  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 0],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaProvider>
      
      {/* <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}> */}
      <AnimatedHeader animatedValue={offset} />

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
          name="ujhgn"
          children={() => (
            <ScrollView
              style={{flex: 1, backgroundColor: 'white'}}
              contentContainerStyle={{
                alignItems: 'center',
                paddingTop: 250,
                paddingHorizontal: 20,
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: offset}}}],
                {useNativeDriver: false},
              )}>
              {DATA.map(item => (
                <View
                  key={item.id}
                  style={{
                    marginBottom: 20,
                  }}>
                  <Text style={{color: '#101010', fontSize: 32}}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          )}
        />
        <Tab.Screen
          name="nhnh"
          children={() => (
            <View>
              <Text>ss</Text>
            </View>
          )}
        />

        <Tab.Screen
          name="ngngfhnf"
          children={() => (
            <View>
              <Text>ss</Text>
            </View>
          )}
        />
      </Tab.Navigator>

      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};
