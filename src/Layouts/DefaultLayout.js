import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
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
import {EditProfile} from '../pages/content/EditProfile';
import {Security} from '../pages/content/Security';
import PopularToursPage from '../pages/content/PopularToursPage';
import {Provinces} from '../pages/content/Provinces';
import {Cities} from '../pages/content/Cities';
import {useNavigation} from '@react-navigation/native';
// import {Linking} from 'react-native';
// import {Linking, Platform} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const DefaultLayout = () => {
  const netInfo = useNetInfo();
  const navigation = useNavigation();
  // const navigate = url => {
  //   // E
  //   const route = url.replace(/.*?:\/\//g, '');
  //   const id = route.match(/\/([^\/]+)\/?$/)[1];
  //   const routeName = route.split('/')[0];

<<<<<<< HEAD
  //   if (routeName === 'chat' || routeName === 'www.tourmeet.ir/#') {
  //     navigation.navigate('TourDet', {id: id});
  //   }
  // };
  useEffect(() => {
    // Linking.getInitialURL().then(url => {
    //   navigate(url);
    // });
  }, []);
=======

  
  const navigation = useNavigation();
  const navigate = url => {
    // E
    console.log(url)
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];

    if (routeName === 'tour') {
      navigation.navigate('TourDet', {id: id});
    }
  };
  useEffect(() => {
   
    Linking.getInitialURL().then(url => {
      console.log(url)
      navigate(url);
    });
  }, []);
 
 

>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
  return (
    <Tab.Navigator initialRouteName="HomeSatck">
      <Tab.Screen
        name="ProfileSatck"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: '#24C2D8',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        component={netInfo.isConnected ? ProfileSatck : NotConnected}
      />

      <Tab.Screen
        name="nnnn"
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarActiveTintColor: '#24C2D8',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        }}
        component={netInfo.isConnected ? Explore2 : NotConnected}
      />

      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarActiveTintColor: '#24C2D8',
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
      <Homes.Screen name="PopularToursPage" component={PopularToursPage} />
      <Homes.Screen name="Provinces" component={Provinces} />
      <Homes.Screen name="Cities" component={Cities} />
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
      <Profiles.Screen name="EditProfile" component={EditProfile} />
      <Profiles.Screen name="Security" component={Security} />
    </Profiles.Navigator>
  );
}
