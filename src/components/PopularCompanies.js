import React, {useEffect, useRef, useState} from 'react';
import {
  Box,
  Pressable,
  Image,
  ScrollView,
  HStack,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {getPopularCamps} from '../services/postServices';
import {Leaders} from './Leaders';
import {NoCamp} from './NoCamp';

export const PopularCompanies = () => {
  const navigation = useNavigation();
  const [camps, setcamps] = useState([]);
  const [status, setstatuss] = useState(3);

  useEffect(() => {
    getPopularCamps().then(res => {
      if (res?.status === 200) {
        setstatuss(1);
        setcamps(res.data);
      }
      if (res?.status === 408) {
        setstatuss(0);
      }
    });
  }, []);
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  if (status === 1) {
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
                {post.profilePhotos && post.profilePhotos.length !== 0 ? (
                  <Image
                    flex={0.45}
                    rounded="xl"
                    fallbackSource={{
                      uri: `http://192.168.43.153:3333/uploads/defaultProfile1.jpg`,
                    }}
                    source={{
                      uri: `http://192.168.43.153:3333/uploads/profilePhotos/${post.profilePhotos[0].name}`,
                    }}
                    h="full"
                    alt="ee"
                  />
                ) : (
                  <Image
                    flex={0.45}
                    rounded="xl"
                    source={{
                      uri: `http://192.168.43.153:3333/uploads/defaultProfile1.jpg`,
                    }}
                    h="full"
                    alt="ee"
                  />
                )}
                <Box
                  p={1}
                  flexDirection="column"
                  justifyContent="space-between"
                  flex={0.55}>
                  <Text
                    textAlign={'right'}
                    fontFamily={'B YekanBold'}
                    fontSize="12">
                    {post.name}
                  </Text>
                  {/* <Text
                    textAlign={'right'}
                    fontFamily={'B Yekan'}
                    fontSize="10"
                    color={'gray.400'}>
                    {truncate(post.description, 5)}
                  </Text> */}

                  <Box mt={2} alignSelf={'center'}>
                    <Leaders data={post.id} />
                  </Box>
                </Box>
              </Box>
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    );
  }
  if (status === 0) {
    return <NoCamp status={0} />;
  }
  if (status === 3) {
    return <NoCamp status={3} />;
  }
};
