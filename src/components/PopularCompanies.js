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

export const PopularCompanies = () => {
  const navigation = useNavigation();
  const [camps, setcamps] = useState([]);
  useEffect(() => {
    getPopularCamps().then(res => {
      setcamps(res.data);
    });
  }, []);
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}
      onContentSizeChange={scrollToEnd}
      contentContainerStyle={{flexDirection: 'row-reverse'}}
      horizontal={true}>
      <HStack space={5} direction="row">
        {camps.map((post, i) => (
          <Pressable
            key={i}
            onPress={() =>
              navigation.navigate('CampProfile', {
                id: post.id,
              })
            }>
            <Box bg="white" h="70" w="70" rounded="full" shadow={7}>
              <Badge
                bg="skyblue"
                rounded="full"
                mb={-5}
                zIndex={99}
                variant="solid"
                alignSelf="flex-start"
                _text={{
                  fontSize: 10,
                }}>
                9.8
              </Badge>
              <Image
                rounded="full"
                h="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                }}
              />
            </Box>
          </Pressable>
        ))}
         {camps.map((post, i) => (
          <Pressable
            key={i}
            onPress={() =>
              navigation.navigate('CampProfile', {
                id: post.id,
              })
            }>
            <Box bg="white" h="70" w="70" rounded="full" shadow={7}>
              <Badge
                bg="skyblue"
                rounded="full"
                mb={-5}
                zIndex={99}
                variant="solid"
                alignSelf="flex-start"
                _text={{
                  fontSize: 10,
                }}>
                9.8
              </Badge>
              <Image
                rounded="full"
                h="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                }}
              />
            </Box>
          </Pressable>
        ))}
         {camps.map((post, i) => (
          <Pressable
            key={i}
            onPress={() =>
              navigation.navigate('CampProfile', {
                id: post.id,
              })
            }>
            <Box bg="white" h="70" w="70" rounded="full" shadow={7}>
              <Badge
                bg="skyblue"
                rounded="full"
                mb={-5}
                zIndex={99}
                variant="solid"
                alignSelf="flex-start"
                _text={{
                  fontSize: 10,
                }}>
                9.8
              </Badge>
              <Image
                rounded="full"
                h="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                }}
              />
            </Box>
          </Pressable>
        ))}
      </HStack>
    </ScrollView>
  );
};
