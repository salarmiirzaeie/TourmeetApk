import {ScrollView, View, Text, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {AnimatedHeader} from '../assets/Components/AnimatedHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from '../components/Explore/List';
const Tab = createMaterialTopTabNavigator();

export const Profile = () => {
  const DATA = [
    {
      id: 1,
      title: 'The Hunger Games',
    },
    {
      id: 2,
      title: 'Harry Potter and the Order of the Phoenix',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
    },
    {
      id: 5,
      title: 'Twilight',
    },
    {
      id: 6,
      title: 'The Book Thief',
    },
    {
      id: 7,
      title: 'The Chronicles of Narnia',
    },
    {
      id: 8,
      title: 'Animal Farm',
    },
    {
      id: 9,
      title: 'Gone with the Wind',
    },
    {
      id: 10,
      title: 'The Shadow of the Wind',
    },
    {
      id: 11,
      title: 'The Fault in Our Stars',
    },
    {
      id: 12,
      title: "The Hitchhiker's Guide to the Galaxy",
    },
    {
      id: 13,
      title: 'The Giving Tree',
    },
    {
      id: 14,
      title: 'Wuthering Heights',
    },
    {
      id: 15,
      title: 'The Da Vinci Code',
    },
  ];
  const HEADER_HEIGHT = 200;
  const insets = useSafeAreaInsets();
  const [ff, setff] = useState();
  const offset = useRef(new Animated.Value(0)).current;
  var headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 0],

    extrapolate: 'clamp',
  });
  console.log(headerHeight);
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, backgroundColor: 'yellow'}}>

        <Animated.View
          style={{
            position: 'absolute',

            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: 'lightblue',
          }}
        />
        <Animated.View  style={{height:"100%", transform: [{translateY: headerHeight}],
            left: 0,
            right: 0,
            zIndex: 10,
            position: 'absolute',
            top:0
          }}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'white',
              tabBarStyle: {
                backgroundColor: '#8F95D3',
                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
              },
              tabBarIndicatorStyle: {
                backgroundColor: 'transparent',
              },
            }}>
            <Tab.Screen
              name="ujhgn"
              children={() => (
                
                <ScrollView
                  scrollEventThrottle={22}
                  onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: offset}}}],
                    {useNativeDriver: false},
                    
                  )}>
                  <View style={{ padding: 10}}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>26</Text>
                    <Text>55</Text>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>26</Text>
                    <Text>55</Text>
                    <Text>55</Text>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>26</Text>
                    <Text>55</Text>
                  </View>
                </ScrollView>
              )}
            />
            <Tab.Screen
              name="nhnh"
              children={() => (
                <View>
                  <Text>ss</Text>
                </View>
              )}
            />

            <Tab.Screen
              name="ngngfhnf"
              children={() => (
                <View>
                  <Text>ss</Text>
                </View>
              )}
            />
          </Tab.Navigator>
        </Animated.View>
      </View>
    </SafeAreaProvider>
  );
};
