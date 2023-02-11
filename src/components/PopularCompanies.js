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
              {/* <Badge
                bg="#24C2D8"
                rounded="full"
                mb={-5}
                zIndex={99}
                variant="solid"
                alignSelf="flex-start"
                _text={{
                  fontSize: 10,
                }}>
                9.8
              </Badge> */}
              <Image
                flex={0.45}
                rounded="xl"
                h="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                }}
              />
              <Box p={1} flex={0.55}>
                <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="12"
                  bold>
                  {post.name}
                </Text>
                <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="10"
                  color={"gray.400"}
                  >
                  {truncate(post.description, 10)}{'ddd '}
                </Text>
                {/* <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="md"
                  color={"gray.400"}
                  >
                    sccs
                  {post.description}
                </Text> */}
                <Box justifyContent={'center'} alignSelf={'center'}>
                  <Leaders />
                </Box>
              </Box>
            </Box>
          </Pressable>
        ))}
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
              {/* <Badge
                bg="#24C2D8"
                rounded="full"
                mb={-5}
                zIndex={99}
                variant="solid"
                alignSelf="flex-start"
                _text={{
                  fontSize: 10,
                }}>
                9.8
              </Badge> */}
              <Image
                flex={0.45}
                rounded="xl"
                h="full"
                alt="ee"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/${post.photo}`,
                }}
              />
              <Box p={1} flex={0.55}>
                <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="12"
                  bold>
                  {post.name}
                </Text>
                <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="10"
                  color={"gray.400"}
                  >
                  {truncate(post.description, 10)}{'ddd '}
                </Text>
                {/* <Text
                  textAlign={'right'}
                  fontFamily={'B Yekan'}
                  fontSize="md"
                  color={"gray.400"}
                  >
                    sccs
                  {post.description}
                </Text> */}
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
};
