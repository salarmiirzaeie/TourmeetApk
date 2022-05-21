import React from "react";

import List  from "../components/Explore/List";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NativeBaseProvider} from "native-base";
const Tab = createMaterialTopTabNavigator();

export const Explore = () => {
    
    return (
      <NativeBaseProvider>
      <Tab.Navigator  screenOptions={{
           
            tabBarActiveTintColor: "white",
            
            tabBarStyle:{
              backgroundColor:"#8F95D3",
              borderBottomEndRadius:30,
              borderBottomLeftRadius:30,
              
              
            },
            tabBarIndicatorStyle:{
              
              backgroundColor:"transparent"
            },
            
         
          }}>
             <Tab.Screen  name="ujhgn"  component={List} />
          <Tab.Screen name="nhnh" component={List} />
      
           <Tab.Screen name="ngngfhnf" component={List} />
        </Tab.Navigator>
    </NativeBaseProvider>
  );
};
