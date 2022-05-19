import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {About} from "../Details/About"
import {Comments} from "../Details/Comments"
import {StyleSheet  } from "react-native";
const Tab = createMaterialTopTabNavigator();
export const TabViev = () => {
    return (
        <Tab.Navigator  style={styles.container} options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarActiveTintColor: "#00A693",
            headerShown: false,
            
            
            
           
          }}>
             <Tab.Screen  name="درباره"  component={About} />
          <Tab.Screen name="نظرات" component={Comments} />
      
           <Tab.Screen name="Home" component={About} />
        </Tab.Navigator>
      );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    

  },
});

