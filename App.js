import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultLayout} from './src/Layouts/DefaultLayout';
import {NativeBaseProvider, Spinner, View} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, Store} from './store';
const Login = React.lazy(() => import('./src/pages/Login'));
const SignUp = React.lazy(() => import('./src/pages/SignUp'));
const Direct = React.lazy(() => import('./src/pages/content/Direct'));

const CamProfile2 = React.lazy(() => import('./src/pages/content/CamProfile2'));

const SearchPage = React.lazy(() => import('./src/pages/content/SearchPage'));
const TourDet = React.lazy(() => import('./src/pages/content/TourDet'));

const loading = () => {
  <NativeBaseProvider>
    <View>
      <Spinner color={'red.500'} colorScheme={'coolGray'} />
    </View>
  </NativeBaseProvider>;
};
const App = () => {
  const MainSatck = createNativeStackNavigator();

  return (
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
            <MainSatck.Screen name="SearchPage" component={SearchPage} />
            <MainSatck.Screen name="CampProfile" component={CamProfile2} />
          </MainSatck.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
