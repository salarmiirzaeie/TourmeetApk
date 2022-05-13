/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from './assets/pages/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { CompanyDet } from "./Pages/CompanyDet";
import { Explore } from "./Pages/Explore";
import { TourDet } from "./Pages/TourDet";
import { Profile } from "./Pages/Profile";
import { Direct } from "./components/Home/Direct";
import { CampProfile } from "./Pages/CampProfile";
import { SearchPage } from "./Pages/SearchPage";
import { AddTour } from "./Pages/AddTour";
import { Home2 } from "./Pages/Home2"
import { NativeBaseProvider, Circle } from "native-base"

export default function App() {
  const MainSatck = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <MainSatck.Navigator screenOptions={{
        headerShown: false,
      }}>
        <MainSatck.Screen name="Tabstack" component={Tabstack} />
        <MainSatck.Screen name="TourDet" component={TourDet} />

        <MainSatck.Screen name="CompanyDet" component={CompanyDet} />
        <MainSatck.Screen name="Direct" component={Direct} />
        <MainSatck.Screen name="SearchPage" component={SearchPage} />
        <MainSatck.Screen name="AddTour1" component={AddTour} />
      </MainSatck.Navigator>

    </NavigationContainer>
  );
}


const Tab = createMaterialBottomTabNavigator();

function Tabstack() {
  return (

    <Tab.Navigator
      labeled={true}
      barStyle={{
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 35,
        borderTopColor: "white",
        stopAnimation: "50",
      }}


    >
      <Tab.Screen
        options={{
          unmountOnBlur: true,

          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),


        }}
        name="Homea"
        component={Home2}
      />
      <Tab.Screen
        name="nnnn"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),

        }}
        component={Explore}
      />
      <Tab.Screen
        name=" "
        options={{

          tabBarIcon: ({ color }) => (
            <NativeBaseProvider>
              <Circle size={41} mt={-2} shadow={5} bg="#00A693">
                <Feather name="plus" size={24} color={color} />
              </Circle>
            </NativeBaseProvider>
          ),
        }}


        component={AddTour}
      />
      <Tab.Screen
        name="s"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),

        }}
        component={Profile}
      />
      <Tab.Screen
        name="Esxplore"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),

        }}
        component={CampProfile}
      />
    </Tab.Navigator>
  );
}