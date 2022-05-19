import React from "react";

import {List}  from "../components/Explore/List";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NativeBaseProvider} from "native-base";
import { Test } from "../assets/pages/Test";

const Tab = createMaterialTopTabNavigator();

export const Explore = () => {
    
    return (
      <NativeBaseProvider>
      <Tab.Navigator   options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarActiveTintColor: "#00A693",
            headerShown: false,
            
           
          }}>
             <Tab.Screen name="hn"  component={List} />
          <Tab.Screen name="m" component={Test} />
      
           <Tab.Screen name="Home" component={List} />
        </Tab.Navigator>
    </NativeBaseProvider>
  );
};
