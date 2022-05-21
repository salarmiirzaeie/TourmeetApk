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
import { NativeBaseProvider, Circle ,Stagger} from "native-base"
import { Tourdet3 } from './components/Details/Tourdet3';
import { Provider } from 'react-redux';
import {Store,persistor} from './assets/State-Management/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux'
import { SignUp } from './assets/signpages/SignUp';
import { Settings } from './Pages/Settings';
import { Login } from './assets/signpages/Login';
import { ProfileGallery } from './components/Profile/ProfileGallery';

export default function App() {
  const MainSatck = createNativeStackNavigator()

  return (
<Provider store={Store}>
<PersistGate loading={null} persistor={persistor}>
<NavigationContainer onReady={()=>console.log("ddd")}>
      <MainSatck.Navigator screenOptions={{
        headerShown: false,
      }}>
        <MainSatck.Screen name="Tabstack" component={Tabstack} />
        <MainSatck.Screen name="TourDet" component={TourDet} />
        <MainSatck.Screen name="TourDet3" component={Tourdet3} />


        <MainSatck.Screen name="CompanyDet" component={CompanyDet} />
        <MainSatck.Screen name="Direct" component={Direct} />
        <MainSatck.Screen name="SearchPage" component={SearchPage} />
        <MainSatck.Screen name="AddTour1" component={AddTour} />
        <MainSatck.Screen name="SignUp" component={SignUp} />

      </MainSatck.Navigator>

    </NavigationContainer>
    </PersistGate>
</Provider>
   
  );
}

function HomeSatck() {
  const HomingSatck = createNativeStackNavigator()

  return (

      <HomingSatck.Navigator screenOptions={{
        headerShown: false,
      }}>
        <HomingSatck.Screen name="cc" component={Home2} />
        <HomingSatck.Screen name="CampProfile" component={CampProfile} />
        <HomingSatck.Screen name="Settings" component={Settings} />

      

       
      </HomingSatck.Navigator>

  
   
  );
}




function ProfileSatck() {
  const ProfileingSatck = createNativeStackNavigator()

  return (

      <ProfileingSatck.Navigator screenOptions={{
        headerShown: false,
      }}>
        <ProfileingSatck.Screen name="Profile" component={Profile} />
      
        <ProfileingSatck.Screen name="Settings" component={Settings} />
        <ProfileingSatck.Screen name="Login" component={Login} />


       
      </ProfileingSatck.Navigator>

  
   
  );
}



function Tabstack() {
  const Tab = createBottomTabNavigator();
  const IsSigned=useSelector(store=>store.loginState)
// if(IsSigned){
  return (

    <Tab.Navigator
      

    >
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: "#00A693",

          headerShown: false,
          tabBarShowLabel: false,
          lazy:true,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),


        }}
        name="HomeSatck"
        component={HomeSatck}
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
              <Circle size={50} mt={-5} shadow={7} bg="#00A693">
                <Feather name="plus" size={30} color={color} />
              </Circle>
            </NativeBaseProvider>
          ),
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor:"gray"


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
        component={ProfileGallery}
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
        component={ProfileSatck}
      />
    </Tab.Navigator>
  );
// }
// else{
//   return(

//    <LoginSatck/>
//   )
// }
 
}
function LoginSatck() {
  const LogingSatck = createNativeStackNavigator()

  return (

      <LogingSatck.Navigator screenOptions={{
        headerShown: false,
      }}>
        <LogingSatck.Screen name="Login" component={Login} />
      
        <LogingSatck.Screen name="SignUp" component={SignUp} />


       
      </LogingSatck.Navigator>

  
   
  );
}