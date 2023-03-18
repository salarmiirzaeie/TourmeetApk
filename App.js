import React, {Suspense, useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultLayout} from './src/Layouts/DefaultLayout';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Platform, Linking, I18nManager} from 'react-native';

import {persistor, Store} from './store';
import {SplashScreen} from './src/components/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = React.lazy(() => import('./src/pages/Login'));
const SignUp = React.lazy(() => import('./src/pages/SignUp'));
const Direct = React.lazy(() => import('./src/pages/content/Direct'));
const UsersPage = React.lazy(() => import('./src/pages/content/UsersPage'));
const UserProfile = React.lazy(() => import('./src/pages/content/UserProfile'));

const CamProfile2 = React.lazy(() => import('./src/pages/content/CamProfile2'));
const CampTours = React.lazy(() => import('./src/pages/content/CampTours'));
const PermissPage = React.lazy(() => import('./src/pages/content/PermissPage'));
const LeadersPage = React.lazy(() => import('./src/pages/content/LeadersPage'));
const ForgetPassword = React.lazy(() => import('./src/pages/ForgetPassword'));
const EnterNumb = React.lazy(() => import('./src/pages/EnterNumb'));
const Chat = React.lazy(() => import('./src/pages/content/Chat'));
const ChangePassword = React.lazy(() => import('./src/pages/ChangePassword'));

const SearchPage = React.lazy(() => import('./src/pages/content/SearchPage'));
const TourDet = React.lazy(() => import('./src/pages/content/TourDet'));

const App = () => {
  I18nManager.allowRTL(false);

  const MainSatck = createNativeStackNavigator();
  const [splash, setsplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setsplash(false);
    }, 3000);
  }, []);
  return splash ? (
    <SplashScreen />
  ) : (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainSatck.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <MainSatck.Screen name="DefaultLayout" component={DefaultLayout} />
            <MainSatck.Screen name="Login" component={Login} />
            <MainSatck.Screen name="SignUp" component={SignUp} />
            <MainSatck.Screen name="Direct" component={Direct} />
            <MainSatck.Screen name="TourDet" component={TourDet} />
            <MainSatck.Screen name="Chat" component={Chat} />
            <MainSatck.Screen name="TourDet3" component={TourDet} />
            <MainSatck.Screen name="TourDet2" component={TourDet} />
            <MainSatck.Screen name="SearchPage" component={SearchPage} />
            <MainSatck.Screen name="CampProfile" component={CamProfile2} />
            <MainSatck.Screen name="UsersPage" component={UsersPage} />
            <MainSatck.Screen name="UserProfile" component={UserProfile} />
            <MainSatck.Screen name="CampTours" component={CampTours} />
            <MainSatck.Screen name="PermissPage" component={PermissPage} />
            <MainSatck.Screen name="LeadersPage" component={LeadersPage} />
            <MainSatck.Screen
              name="ChangePassword"
              component={ChangePassword}
            />
            <MainSatck.Screen name="EnterNumb" component={EnterNumb} />
            <MainSatck.Screen
              name="ForgetPassword"
              component={ForgetPassword}
            />
          </MainSatck.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
