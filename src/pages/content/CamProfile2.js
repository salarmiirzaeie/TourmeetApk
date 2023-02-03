import {useNavigation, useRoute} from '@react-navigation/native';
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
  
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {
  getCampGallery,
  getCampTours,
  getUser,
} from '../../services/postServices';
import {DefaultHeader} from '../../components/DefaultHeader';


const HEADER_HEIGHT = 170;
const TAB_BAR_HEIGHT = 50;

const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const FirstRoute = ({
  position,
  syncOffset,
  firstRef,
  onMomentumScrollBegin,
}: any) => {
  const params = useRoute();
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    getCampGallery(params.params.id).then(res => {
      if (res.status === 200) {
        setphotos(res.data);
      }
    });
  }, []);
  return (
    <Animated.FlatList
      ref={firstRef}
      scrollEventThrottle={1}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: position}}}],
        {useNativeDriver: true},
      )}
      onMomentumScrollEnd={e => {
        syncOffset('first', e.nativeEvent.contentOffset.y);
      }}
      data={photos}
      keyExtractor={(item, i) => String(i)}
      renderItem={({item}) => (
        <View style={[styles.scene]}>
          <Image
            style={{width: initialLayout.width / 3}}
            source={{
              uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.name}`,
            }}
          />
          <Image
            style={{width: initialLayout.width / 3}}
            source={{
              uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.name}`,
            }}
          />
          <Image
            style={{width: initialLayout.width / 3}}
            source={{
              uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.name}`,
            }}
          />
        </View>
      )}
      contentContainerStyle={{paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT}}
    />
  );
};

const SecondRoute = ({
  position,
  syncOffset,
  secondRef,
  onMomentumScrollBegin,
}: any) => {
  const params = useRoute();

  const [posts, setposts] = useState([]);
  useEffect(() => {
    getCampTours(params.params.id).then(res => {
      setposts(res.data);
    });
  }, []);
  const navigation = useNavigation();

  return (
    <Animated.FlatList
      ref={secondRef}
      scrollEventThrottle={1}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: position}}}],
        {
          useNativeDriver: true,
        },
      )}
      onMomentumScrollEnd={e => {
        syncOffset('second', e.nativeEvent.contentOffset.y);
      }}
      data={posts}
      keyExtractor={(item, i) => String(i)}
      renderItem={({item}) => (
        <Pressable
          onPress={() =>
            navigation.navigate('TourDet', {
              id: item._id,
            })
          }
          style={{
            height: initialLayout.height / 5.8,
            borderRadius: 10,
            flexDirection: 'row',
            marginVertical: 1,
            marginHorizontal: 5,
            backgroundColor: 'white',
          }}>
          <Image
            style={{flex: 0.35, borderRadius: 10}}
            source={{
              uri: `http://192.168.43.153:3333/uploads/thumbnails/${item.thumbnail[0]}`,
            }}
          />
          <View
            style={{
              flex: 0.65,
              flexDirection: 'column',
              padding: 7,
            }}>
            <View style={{flex: 0.4}}>
              <Text style={{color: 'black', textAlign: 'right', fontSize: 15}}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                flex: 0.6,
              }}>
              <Text style={{color: 'black', textAlign: 'right'}}>s</Text>
              <Text style={{color: 'black', textAlign: 'right'}}>
                {item.price}
                {'تومان'}
              </Text>
              <Text style={{color: 'black', textAlign: 'right', marginTop: 7}}>
                {item.capacity - item.joinedUsers.length}
                {'نفرباقی مانده'}
              </Text>
            </View>
          </View>
        </Pressable>
      )}
      contentContainerStyle={{paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT}}
    />
  );
};

const CamProfile2 = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const position: any = useRef(new Animated.Value(0)).current;
  const isValidTabPress: any = useRef(false);

  const firstRef: any = useRef();
  const secondRef: any = useRef();

  const onMomentumScrollBegin = () => {
    isValidTabPress.current = true;
  };

  const syncOffset = (scene: any, y: any) => {
    if (scene === 'first') {
      secondRef?.current?.scrollToOffset({
        offset: y,
        animated: false,
      });
    }
    if (scene === 'second') {
      firstRef?.current?.scrollToOffset({
        offset: y,
        animated: false,
      });
    }
    isValidTabPress.current = false;
  };

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'first':
        return (
          <FirstRoute
            position={position}
            syncOffset={syncOffset}
            firstRef={firstRef}
            onMomentumScrollBegin={onMomentumScrollBegin}
          />
        );
      case 'second':
        return (
          <SecondRoute
            position={position}
            syncOffset={syncOffset}
            secondRef={secondRef}
            onMomentumScrollBegin={onMomentumScrollBegin}
          />
        );
      default:
        return null;
    }
  };

  function renderTabBar(props: any) {
    const translateY = position.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={[
          {position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1},
          {transform: [{translateY}]},
        ]}>
        <View
          style={{
            height: HEADER_HEIGHT,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              height: '75%',
            }}>
            <Image
              style={{flex: 0.35, borderRadius: 10, marginTop: -5}}
              source={{uri: `http://192.168.43.153:3333/uploads/${post.photo}`}}
            />
            <View style={{flex: 0.65}}>
              <Text>dd</Text>
            </View>
          </View>
        </View>
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: 'transparent'}}
          style={{
            height: TAB_BAR_HEIGHT,
            backgroundColor: 'skyblue',
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          onTabPress={({route, preventDefault}) => {
            if (isValidTabPress.current) {
              preventDefault();
            }
          }}
        />
      </Animated.View>
    );
  }
  const [post, setposts] = useState({});

  const params = useRoute();

  useEffect(() => {
    getUser(params.params.id).then(res => {
      setposts(res.data);
    });
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightgray'}}>
        <View flex={0.09}>
          <DefaultHeader name={post.name} />
        </View>
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

const styles = StyleSheet.create({
  scene: {
    height: initialLayout.width / 3,
    flexDirection: 'row',
  },
});

export default CamProfile2;
