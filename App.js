/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {CompanyDet} from './Pages/CompanyDet';
import {Explore} from './Pages/Explore';
import {Direct} from './components/Home/Direct';
import {CampProfile} from './Pages/CampProfile';
import {SearchPage} from './Pages/SearchPage';
import {Home2} from './Pages/Home2';
import {
  
  useDisclose,
 
} from 'native-base';
import {Tourdet3} from './components/Details/Tourdet3';
import {Provider} from 'react-redux';
import {Store, persistor} from './assets/State-Management/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {SignUp} from './assets/Pages/signpages/SignUp';
import {Login} from './assets/Pages/signpages/Login';
import {Companies} from './Pages/Companies';
import {Activity} from './Pages/Activity';
import {ConfirmationPage} from './Pages/ConfirmationPage';
import { MyProfile } from './Pages/MyProfile';

import { Chat } from './Pages/Chat';

export default function App() {
  const MainSatck = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer onReady={() => console.log('ddd')}>
          <MainSatck.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <MainSatck.Screen name="Tabstack" component={Tabstack} />
            <MainSatck.Screen name="TourDet3" component={Tourdet3} />

            <MainSatck.Screen name="CompanyDet" component={CompanyDet} />
            <MainSatck.Screen name="Direct" component={Direct} />
            <MainSatck.Screen name="SearchPage" component={SearchPage} />
            <MainSatck.Screen name="SignUp" component={SignUp} />
            <MainSatck.Screen name="Chat" component={Chat} />
            <MainSatck.Screen name="MyProfile" component={MyProfile} />


            <MainSatck.Screen
              name="ConfirmationPage"
              component={ConfirmationPage}
            />
          </MainSatck.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

function HomeSatck() {
  const HomingSatck = createNativeStackNavigator();

  return (
    <HomingSatck.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomingSatck.Screen name="cc" component={Home2} />
      <HomingSatck.Screen name="CampProfile" component={CampProfile} />
      <HomingSatck.Screen name="Companies" component={Companies} />
    </HomingSatck.Navigator>
  );
}

function ProfileSatck() {
  const ProfileingSatck = createNativeStackNavigator();

  return (
    <ProfileingSatck.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileingSatck.Screen name="MyProfile" component={MyProfile} />

    </ProfileingSatck.Navigator>
  );
}

function Tabstack() {
  const Tab = createBottomTabNavigator();
  const IsSigned = useSelector(store => store.loginState);

  const {isOpen, onToggle} = useDisclose();
  if (IsSigned) {
    return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            unmountOnBlur: true,
            tabBarActiveTintColor: '#00A693',

            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
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
            tabBarActiveTintColor: '#00A693',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Ionicons name="compass-outline" size={24} color={color} />
            ),
          }}
          component={Explore}
        />

        {/* <Tab.Screen
      
      
        name=" "
        
        
        options={{
        
         
          tabBarIcon: ({ color }) => (
            
            <NativeBaseProvider>
            
            <Circle size={45}shadow={7} bg="cyan.400">
                <AntDesign name="plus" size={30}  />
              </Circle>

              
            </NativeBaseProvider>
          ),
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor:"gray",
          
          


        }
      }
      


        component={AddTour}
      /> */}
        <Tab.Screen
          name="s"
          options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarActiveTintColor: '#00A693',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <AntDesign name="hearto" size={24} color={color} />
            ),
          }}
          component={Activity}
        />
        <Tab.Screen
          name="Esxplore"
          options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarActiveTintColor: '#00A693',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
          component={ProfileSatck}
        />
      </Tab.Navigator>
    );
  } else {
    return <LoginSatck />;
  }
}
function LoginSatck() {
  const LogingSatck = createNativeStackNavigator();

  return (
    <LogingSatck.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LogingSatck.Screen name="Login" component={Login} />

      <LogingSatck.Screen name="SignUp" component={SignUp} />
    </LogingSatck.Navigator>
  );
}
