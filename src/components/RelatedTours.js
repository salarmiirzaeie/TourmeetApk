import React, {useEffect, useRef, useState} from 'react';
import {Pressable, Image, ScrollView, HStack, View, Text} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation, useRoute} from '@react-navigation/native';
import {formDate, truncate} from '../utils/helpers';
import {getRelatedTours} from '../services/postServices';
export const RelatedTours = ({typep, id}) => {
  const navigation = useNavigation();
  const [posts, setposts] = useState([]);
  const route = useRoute();
  useEffect(() => {
    getRelatedTours({typep, id}).then(res => {
      if (res.status === 200) {
        setposts(res.data);
      }
    });
  }, [typep, id]);
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  if (posts.length !== 0) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        // pagingEnabled={true}
        // bounces={false}
        // directionalLockEnabled={true}
        h={190}
        ref={scrollRef}
        flexDirection={posts.length <= 2 ? 'row-reverse' : 'row'}
        onContentSizeChange={scrollToEnd}
        contentContainerStyle={{flexDirection: 'row-reverse'}}
        horizontal={true}>
        <View>
          <Text fontSize={'lg'} fontFamily={'B Yekan'}>
            تورهای مرتبط
          </Text>
          <HStack pt={3} flex={1} w="full" space={4}>
            {posts.map((post, i) => (
              <Pressable
                key={i}
                onPress={() => {
                  navigation.navigate(
                    route.name === 'TourDet' || route.name === 'TourDet3'
                      ? 'TourDet2'
                      : 'TourDet',
                    {
                      id: post._id,
                    },
                  );
                }}
                h="full"
                w={120}
                rounded="2xl"
                // shadow={1}
                // p={2}
                bg={'white'}>
                <Image
                  rounded="2xl"
                  h="55%"
                  W="80%"
                  fallbackSource={{
                    uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                  }}
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
                  h="40%"
                  w="100%">
                  <Text
                    fontFamily={'B YekanBold'}
                    fontSize={'md'}
                    textAlign={'right'}>
                    {truncate(post.title, 7)}
                  </Text>
                  <View
                    px={1}
                    flexDirection={'row'}
                    justifyContent={'space-between'}>
                    {/* <Badge rounded={'2xl'}>
                    <Text color={'gray.400'} fontSize="sm" textAlign={'right'}>
                      {post.durationTime}
                    </Text>
                  </Badge> */}
                    <View flexDirection={'row'} justifyContent="space-between">
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
        </View>
      </ScrollView>
    );
  } else return null;
};
