import {NativeBaseProvider, Spinner} from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Animated,
  Text,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import List2 from '../../components/List2';
import {Nodata} from '../../components/Nodata';
import {getIndex} from '../../services/postServices';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const Explore2 = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'جدیدترین ها'},
    {key: 'second', title: 'ارزانترین ها'},
    {key: 'third', title: 'محبوبترین ها'},
  ]);

  const isValidTabPress: any = useRef(false);
  const [posts, setpostss] = useState([]);
  const [status, setstatuss] = useState(3);
  const date = a => new Date(a);

  useEffect(() => {
    getIndex().then(res => {
      if (res.status === 200) {
        setstatuss(1);
        setpostss(res.data.posts);
      }
      if (res.status === 408) {
        setstatuss(0);
      }
    });
  }, []);
  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'first':
        return status === 3 ? (
          <Nodata status={3} />
        ) : status === 0 ? (
          <Nodata status={0} />
        ) : (
          <List2
            datas={posts?.sort((a, b) => date(b.createdAt) - date(a.createdAt))}
          />
        );

      case 'second':
        return status === 3 ? (
          <Nodata status={3} />
        ) : status === 0 ? (
          <Nodata status={0} />
        ) : (
          <List2 datas={posts?.sort((a, b) => a.price - b.price)} />
        );

      case 'third':
        return status === 3 ? (
          <Nodata status={3} />
        ) : status === 0 ? (
          <Nodata status={0} />
        ) : (
          <List2
            datas={posts?.sort(
              (a, b) => b.joinedUsers.length - a.joinedUsers.length,
            )}
          />
        );

      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'transparent'}}
        style={{
          height: 50,

          backgroundColor: '#24C2D8',
          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
        }}
        onTabPress={({route, preventDefault}) => {
          if (isValidTabPress.current) {
            preventDefault();
          }
        }}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </SafeAreaView>
    </>
  );
};

export default Explore2;
