import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Home} from '../pages/content/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNetInfo} from '@react-native-community/netinfo';

import Feather from 'react-native-vector-icons/Feather';
import {Profile} from '../pages/content/Profile';
import {NotConnected} from '../pages/content/NotConnected';
import {MyTours} from '../pages/content/MyTours';
import {Saveds} from '../pages/content/Saveds';
import Explore2 from '../pages/content/Explore2';

const Tab = createBottomTabNavigator();

export const DefaultLayout = () => {
  const netInfo = useNetInfo();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: 'skyblue',
          lazy: true,
        

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        
        }} 
        
        name="HomeSatck"
        component={netInfo.isConnected ? HomeSatck : NotConnected}
      />
      <Tab.Screen
        name="nnnn"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: 'skyblue',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
        component={netInfo.isConnected ? Explore2 : NotConnected}
      />

      <Tab.Screen
        name="ProfileSatck"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: 'skyblue',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        component={netInfo.isConnected ? ProfileSatck : NotConnected}
      />
    </Tab.Navigator>
  );
};
function HomeSatck() {
  const Homes = createNativeStackNavigator();

  return (
    <Homes.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Homes.Screen name="Home" component={Home} />
    </Homes.Navigator>
  );
}
function ProfileSatck() {
  const Profiles = createNativeStackNavigator();

  return (
    <Profiles.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Profiles.Screen name="Profile" component={Profile} />
      <Profiles.Screen name="MyTours" component={MyTours} />
      <Profiles.Screen name="Saveds" component={Saveds} />
    </Profiles.Navigator>
  );
}
