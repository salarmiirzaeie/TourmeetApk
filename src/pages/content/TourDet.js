import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  NativeBaseProvider,
  Box,
  Pressable,
  Divider,
  Text,
  ScrollView,
  Badge,
  Spinner,
  Button,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getPost} from '../../services/postServices';
import {DetAppBar} from '../../components/DetAppBar';
import {Gallery} from '../../components/Gallery';
import {DetFooter} from '../../components/DetFooter';
import {
  formDate,
  formDate2,
  persianDuration,
  persianType,
  truncate,
} from '../../utils/helpers';
import {Joineds} from '../../components/Joineds';
import {useNavigation} from '@react-navigation/native';
import {Animated, Dimensions} from 'react-native';
import {CircleProgress} from './CircleProgress';
import {RelatedTours} from '../../components/RelatedTours';
import {onShare} from '../../utils/helpers';
import {Nodata} from '../../components/Nodata';
import {Comment} from '../../components/Comment';

const TourDet = ({route}) => {
  const [post, setpost] = useState({});
  const [creator, setcreator] = useState({});
  const [status, setstatuss] = useState(3);
  const [sttats, setsttats] = useState(0);
  const [trancate, settruncate] = useState(true);

  const navigation = useNavigation();
  const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
  useEffect(() => {
    getPost(route.params.id).then(res => {
      if (res.status === 200) {
        setstatuss(1);
        setpost(res.data.post);
        setcreator(res.data.user);
      }
    });
  }, [sttats, route]);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <NativeBaseProvider>
      {status === 1 ? (
        <View flex={1}>
          <View flex={0.1}>
            <DetAppBar
              share={() => onShare({name: post.title, desc: post.body})}
              pos={scrollOffsetY}
            />
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
                bg={'#F8F8F8'}
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
                      fontFamily={'B YekanBold'}>
                      {post.title}
                    </Text>
                    <CircleProgress
                      size={40}
                      pgColor="#24C2D8"
                      strokeWidth={6}
                      text={
                        post.joinedUsers
                          ? `${post.joinedUsers.length}/${post.capacity}`
                          : '0/0'
                      }
                      progressPercent={
                        post.joinedUsers
                          ? (post.joinedUsers.length / post.capacity) * 100
                          : 100
                      }
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

                      <Text
                        fontFamily={'B Yekan'}
                        fontSize={15}
                        mx={1}
                        color={'gray.400'}>
                        {formDate2(post.date)}
                      </Text>
                    </Box>
                    <Box justifyContent="center" flexDirection={'row-reverse'}>
                      <FontAwesome5
                        name="map-marker-alt"
                        style={{fontSize: 15}}
                        color={'#24C2D8'}
                      />

                      <Text
                        fontFamily={'B Yekan'}
                        fontSize={15}
                        mx={1}
                        color={'gray.400'}>
                        {persianType(post.type)}
                      </Text>
                    </Box>
                    <Box justifyContent="center" flexDirection={'row-reverse'}>
                      <FontAwesome5
                        name="hourglass-half"
                        style={{fontSize: 15}}
                        color={'#24C2D8'}
                      />

                      <Text
                        mx={1}
                        fontFamily={'B Yekan'}
                        fontSize={15}
                        color={'gray.400'}>
                        {persianDuration(post.durationTime)}
                      </Text>
                    </Box>
                  </View>
                  <View alignSelf={'flex-end'} flexDirection={'row'} py={4}>
                    <Text
                      textAlign={'right'}
                      color={'gray.400'}
                      fontFamily={'B Yekan'}
                      mx={1}
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
                      alignSelf={'center'}
                      fontSize={'md'}
                      fontFamily={'B YekanBold'}>
                      {'میزبان'}
                    </Text>
                  </View>
                  <Divider />
                  <View py={4}>
                    <Text fontSize={'md'} fontFamily={'B YekanBold'}>
                      {'توضیحات '}
                    </Text>
                    <Text
                      pt={2}
                      textAlign="right"
                      fontSize={'sm'}
                      color={'gray.400'}
                      fontFamily={'B Yekan'}>
                      {trancate ? truncate(post.body, 150) : post.body}
                    </Text>
                    <Pressable onPress={() => settruncate(!trancate)}>
                      <Text>{trancate ? 'نمایش بیشتر' : 'نمایش کمتر'}</Text>
                    </Pressable>
                  </View>
                  <Divider />
                  <View
                    py={4}
                    justifyContent={'space-between'}
                    flexDirection={'row'}>
                    <Pressable
                      onPress={() => {
                        navigation.navigate('UsersPage', {
                          id: post._id,
                        });
                      }}>
                      <Joineds data={post.joinedUsers} />
                    </Pressable>
                    <Pressable
                      alignSelf={'center'}
                      onPress={() => {
                        navigation.navigate('UsersPage', {
                          id: post._id,
                        });
                      }}>
                      <Badge bg={'#E8FDFF'} rounded={'xl'}>
                        <Text
                          fontSize={'sm'}
                          color={'gray.500'}
                          fontFamily={'B Yekan'}>
                          افرادعضوشده
                        </Text>
                      </Badge>
                    </Pressable>
                  </View>

                  <Divider />
                  <View py={4}>
                    <Button
                      onPress={() =>
                        navigation.navigate('CommentsPage', {
                          id: post._id,
                        })
                      }
                      endIcon={<FontAwesome name="comments" />}
                      variant={'outline'}
                      colorScheme="warning">
                      <Text fontFamily={'B Yekan'} textAlign={'center'}>
                        نظرات (16)
                      </Text>
                    </Button>
                  </View>

                  <Divider />
                  <View>
                    <View py={3}>
                      <RelatedTours id={post._id} typep={post.type} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <DetFooter
            mainstatus={
              post.capacity === post.joinedUsers?.length ? false : true
            }
            sestat={() => setsttats(Math.random(1))}
          />
        </View>
      ) : (
        <Nodata status={30} />
      )}
    </NativeBaseProvider>
  );
};
export default TourDet;
