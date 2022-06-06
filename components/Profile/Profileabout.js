import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from '../Explore/List';
import {Gallery} from '../../assets/Components/Gallery';
const Tab = createMaterialTopTabNavigator();
export const Profileabout = gallery => {
  return (
    <Tab.Navigator
      options={{
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarActiveTintColor: '#00A693',
        headerShown: false,
      }}>
      <Tab.Screen name="galley"  component={Gallery} />

      <Tab.Screen name="Settbfdbdfings" component={List} />
    </Tab.Navigator>
  );
};
