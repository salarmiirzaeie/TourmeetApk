import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  Image,
  ScrollView,
  HStack,
  View,
  Text,
  Skeleton,
  Badge,
  Box,
} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
import {getPopularTours, getPopularTourswtok} from '../services/postServices';
import {formDate, persianDuration, truncate} from '../utils/helpers';
import {useSelector} from 'react-redux';
export const PopularTours = () => {
  const navigation = useNavigation();
  const [posts, setposts] = useState([]);
  const logedin = useSelector(state => state.profileModeState);

  useEffect(() => {
    // if (logedin) {
    //   getPopularTourswtok().then(res => {
    //     setposts(res.data);
    //     console.log(res.data);
    //   });
    // } else {
    getPopularTours().then(res => {
      setposts(res.data);
    });
    // }
  }, []);
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      // pagingEnabled={true}
      // bounces={false}
      // directionalLockEnabled={true}
      ref={scrollRef}
      onContentSizeChange={scrollToEnd}
      contentContainerStyle={{flexDirection: 'row-reverse'}}
      horizontal={true}>
      <HStack mt={2} h={250} w="full" space={4}>
        {posts.map((post, i) => (
          <Pressable
            key={i}
            onPress={() =>
              navigation.navigate('TourDet', {
                id: post._id,
              })
            }
            h="full"
            w={180}
            rounded="2xl"
            // shadow={1}
            // p={2}
            bg={'white'}>
            {/* <Box zIndex={200} position={'absolute'}>
              <MaterialIcons
                color={'#24C2D8'}
                style={{
                  zIndex: 80,
                  fontSize: 30,
                  marginTop: -10,
                  marginLeft: 3,
                }}
                name="bookmark"
              />
            </Box> */}
            <Image
              rounded="2xl"
              h="70%"
              W="80%"
              alt="ee"
              source={{
                uri: `http://192.168.43.153:3333/uploads/thumbnails/${post.thumbnail[0]}`,
              }}
            />

            <View
              p={1}
              alignSelf="flex-end"
              flexDirection="column"
              justifyContent={'space-between'}
              h="20%"
              w="100%">
              <Text bold fontSize={'md'} textAlign={'right'}>
                {post.title}
              </Text>
              <View
                mt={2}
                px={1}
                flexDirection={'row'}
                justifyContent={'space-between'}>
                <Badge rounded={'2xl'}>
                  <Text color={'gray.400'} fontSize="sm" textAlign={'right'}>
                    {persianDuration(post.durationTime)}
                  </Text>
                </Badge>
                <View
                  mt={1}
                  flexDirection={'row'}
                  justifyContent="space-between">
                  <Text
                    fontFamily={'B Yekan'}
                    color={'gray.400'}
                    fontSize="sm"
                    textAlign={'right'}>
                    {formDate(post.date)}
                  </Text>
                  <Fontisto style={{fontSize: 18}} name="date" />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </HStack>
    </ScrollView>
  );
};
