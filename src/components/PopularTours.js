import React, {useEffect, useRef, useState} from 'react';
import {
  Pressable,
  Image,
  ScrollView,
  HStack,
  View,
  Text,
  Skeleton,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import {getPopularTours} from '../services/postServices';
export const PopularTours = () => {
  const navigation = useNavigation();
  const [posts, setposts] = useState([]);
  const [noposts, setnoposts] = useState(['s', 'f', 'd', 'c', 'c']);

  useEffect(() => {
    getPopularTours().then(res => {
      setposts(res.data);
    });
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
      <HStack h={225} W="full" space={4}>
        {posts.length !== 0
          ? posts.map((post, i) => (
              <Pressable
                key={i}
                onPress={() =>
                  navigation.navigate('TourDet', {
                    id: post._id,
                  })
                }
                h="full"
                w="40"
                rounded="lg"
                shadow={8}>
                <Image
                  rounded="lg"
                  h="full"
                  W="full"
                  alt="ee"
                  source={{
                    uri: `http://192.168.43.153:3333/uploads/thumbnails/${post.thumbnail[0]}`,
                  }}
                />

                <View
                  p={1}
                  flexDirection="column"
                  position="absolute"
                  h="99%"
                  w="100%">
                  <View flex={0.8}></View>
                  <View bg="gray.500" borderRadius="lg" flex={0.2}>
                    <Text
                      fontFamily={'B Yekan'}
                      alignSelf="center"
                      fontSize={20}
                      bold={true}
                      color="white">
                      {post.title}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))
          : noposts.map((p, i) => (
              <View key={i} h="full" w="40" rounded="lg">
                <Skeleton rounded="lg" h="full" W="full" />

                <View
                  p={1}
                  flexDirection="column"
                  position="absolute"
                  h="99%"
                  w="100%">
                  <View flex={0.8}></View>
                  <View bg="gray.500" borderRadius="lg" flex={0.2}>
                    <Skeleton.Text
                      alignSelf="center"
                      fontSize={20}
                      bold={true}
                      color="white"
                    />
                  </View>
                </View>
              </View>
            ))}
      </HStack>
    </ScrollView>
  );
};
