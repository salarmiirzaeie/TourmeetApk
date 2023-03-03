import React, {useEffect, useRef, useState} from 'react';
import {
  Center,
  Box,
  Badge,
  Pressable,
  Image,
  ScrollView,
  HStack,
  Text,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {getPopularCamps} from '../services/postServices';
import {Joineds} from './Joineds';
import {truncate} from '../utils/helpers';
import {Leaders} from './Leaders';
import {NoCamp} from './NoCamp';

export const PopularCompanies = () => {
  const navigation = useNavigation();
  const [camps, setcamps] = useState([]);
  useEffect(() => {
    getPopularCamps().then(res => {
      if (res?.status === 200) {
        setcamps(res.data);
        console.log(res.data);
      }
    });
  }, []);
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  if (camps.length !== 0) {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        onContentSizeChange={scrollToEnd}
        flexDirection={camps?.length <= 2 ? 'row-reverse' : 'row'}
        contentContainerStyle={{flexDirection: 'row-reverse'}}
        horizontal={true}>
        <HStack space={3} direction="row">
          {camps.map((post, i) => (
            <Pressable
              bg="white"
              h="70"
              flexDirection={'row'}
              w="165"
              rounded="xl"
              key={i}
              onPress={() =>
                navigation.navigate('CampProfile', {
                  id: post.id,
                })
              }>
              <Box h="full" flexDirection={'row-reverse'} w="full" rounded="xl">
                <Image
                  flex={0.45}
                  rounded="xl"
                  fallbackSource={{
                    uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                  }}
                  h="full"
                  alt="ee"
                  source={{
                    uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                  }}
                />
                <Box p={1} flex={0.55}>
                  <Text
                    textAlign={'right'}
                    fontFamily={'B YekanBold'}
                    fontSize="12">
                    {post.name}
                  </Text>
                  <Text
                    textAlign={'right'}
                    fontFamily={'B Yekan'}
                    fontSize="10"
                    color={'gray.400'}>
                    {truncate(post.description, 10)}
                    {'ddd '}
                  </Text>

                  <Box justifyContent={'center'} alignSelf={'center'}>
                    <Leaders />
                  </Box>
                </Box>
              </Box>
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    );
  } else {
    return <NoCamp />;
  }
};
