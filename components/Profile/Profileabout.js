import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Galleryprofile } from './Galleryprofile';
import { List } from '../Explore/List';
const Tab = createMaterialTopTabNavigator();
export const Profileabout = (gallery) => {

  return (
    <Tab.Navigator options={{
      tabBarShowLabel: false,
      unmountOnBlur: true,
      tabBarActiveTintColor: "#00A693",
      headerShown: false,
      


    }}>
      <Tab.Screen name="xx" children={() => <Galleryprofile gallery={gallery} />} />
      <Tab.Screen name="Settings" component={List} />

    </Tab.Navigator>
  );
}
