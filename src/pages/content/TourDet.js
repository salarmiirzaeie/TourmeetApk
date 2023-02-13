import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Image,
  HStack,
  FlatList,
  NativeBaseProvider,
  Box,
  Pressable,
  Button,
  IconButton,
  Modal,
  useDisclose,
  Divider,
  Text,
  ScrollView,
  List,
  VStack,
  Badge,
  Circle,
  Avatar,
  Skeleton,
  Spinner,
  Center,
} from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getPost} from '../../services/postServices';
import {DetAppBar} from '../../components/DetAppBar';
import {Gallery} from '../../components/Gallery';
import {DetFooter} from '../../components/DetFooter';
import {formDate} from '../../utils/helpers';
import {Joineds} from '../../components/Joineds';
import {useNavigation} from '@react-navigation/native';
import {Animated, Dimensions, Share, Alert} from 'react-native';
import {DetContent} from '../../components/DetContent';
import {CircleProgress} from './CircleProgress';
const TourDet = ({route}) => {
  const [pos, setposition] = useState({mode: true});
  const [post, setpost] = useState({});
  const [creator, setcreator] = useState({});
  const navigation = useNavigation();
  const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
  useEffect(() => {
    getPost(route.params.id).then(res => {
      setpost(res.data.post);
      setcreator(res.data.user);
      console.log(res.data.post);
    });
  }, []);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const onShare = async () => {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.1}>
          <DetAppBar share={() => onShare()} pos={scrollOffsetY} />
        </View>
        <View mt={-24} zIndex={-5} flex={0.85}>
          <ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
              {useNativeDriver: false},
            )}>
            {post == {} ? (
              <Spinner />
            ) : (
              <View h={initialLayout.height / 2.5}>
                <Gallery images={post.thumbnail} />
              </View>
            )}
            <View
              bg={'white'}
              mt={-3}
              px={5}
              py={1}
              justifyContent="space-between"
              borderTopRadius={25}>
              <View flex={1}>
                <View
                  flexDirection={'row-reverse'}
                  justifyContent="space-between">
                  <Text
                    alignSelf={'center'}
                    fontSize={'lg'}
                    fontFamily={'B Yekan'}
                    bold>
                    {post.title}
                  </Text>
                  <CircleProgress
                    size={40}
                    pgColor="#24C2D8"
                    strokeWidth={6}
                    text={`${80}%`}
                    progressPercent={80}
                    textColor="gray"
                  />
                </View>
                <View
                  w={'80%'}
                  pt={1}
                  alignSelf="flex-end"
                  flexDirection={'row'}
                  justifyContent="space-between">
                  <Box justifyContent="center" flexDirection={'row-reverse'}>
                    <FontAwesome5
                      name="calendar-alt"
                      style={{fontSize: 15}}
                      color={'#24C2D8'}
                    />

                    <Text fontSize={15} color={'gray.400'}>
                      {formDate(post.date)}
                    </Text>
                  </Box>
                  <Box justifyContent="center" flexDirection={'row-reverse'}>
                    <FontAwesome5
                      name="map-marker-alt"
                      style={{fontSize: 15}}
                      color={'#24C2D8'}
                    />

                    <Text fontSize={15} color={'gray.400'}>
                      {post.type}
                    </Text>
                  </Box>
                  <Box justifyContent="center" flexDirection={'row-reverse'}>
                    <FontAwesome5
                      name="hourglass-half"
                      style={{fontSize: 15}}
                      color={'#24C2D8'}
                    />

                    <Text
                      fontFamily={'B Yekan'}
                      fontSize={15}
                      color={'gray.400'}>
                      {post.durationTime}
                    </Text>
                  </Box>
                </View>
                <View alignSelf={'flex-end'} flexDirection={'row'} py={4}>
                  <Text
                    textAlign={'right'}
                    color={'gray.400'}
                    fontFamily={'B Yekan'}
                    fontSize={15}>
                    تومان
                  </Text>
                  <Text
                    textAlign={'right'}
                    fontFamily={'B Yekan'}
                    fontSize={15}>
                    {post.price}
                  </Text>
                </View>
                <Divider />
                <View
                  py={3}
                  justifyContent={'space-between'}
                  flexDirection={'row'}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('CampProfile', {
                        id: creator.id,
                      })
                    }>
                    <Badge bg={'#E8FDFF'} rounded={'xl'}>
                      <Text
                        fontSize={'sm'}
                        color={'gray.500'}
                        fontFamily={'B Yekan'}>
                        {creator.name}
                      </Text>
                    </Badge>
                  </Pressable>

                  <Text
                    bold
                    alignSelf={'center'}
                    fontSize={'md'}
                    fontFamily={'B Yekan'}>
                    {'میزبان'}
                  </Text>
                </View>
                <Divider />
                <View py={4}>
                  <Text fontSize={'md'} fontFamily={'B Yekan'} bold>
                    {'درباره '}
                  </Text>
                  <Text
                    pt={2}
                    fontSize={'sm'}
                    color={'gray.400'}
                    fontFamily={'B Yekan'}>
                    {
                      'طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.  '
                    }
                  </Text>
                </View>
                <Divider />
                <View
                  py={4}
                  justifyContent={'space-between'}
                  flexDirection={'row'}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate('UsersPage', {
                        joinedUsers: post.joinedUsers,
                      })
                    }>
                    <Joineds />
                  </Pressable>

                  <Badge bg={'#E8FDFF'} rounded={'xl'}>
                    <Text
                      fontSize={'sm'}
                      color={'gray.500'}
                      fontFamily={'B Yekan'}>
                      افرادعضوشده
                    </Text>
                  </Badge>
                </View>
                <Divider />
                <View h={150} py={3}>
                  <View rounded={'xl'} h={'full'} w={'full'} bg="#24C2D8">
                    <Text>s</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <DetFooter />
      </View>
    </NativeBaseProvider>
  );
};
export default TourDet;
