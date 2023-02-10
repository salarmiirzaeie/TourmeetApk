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
import {getPost} from '../../services/postServices';
import {DetAppBar} from '../../components/DetAppBar';
import {Gallery} from '../../components/Gallery';
import {DetFooter} from '../../components/DetFooter';
import {formDate} from '../../utils/helpers';
import {Joineds} from '../../components/Joineds';
import {useNavigation} from '@react-navigation/native';
import {Animated, Dimensions} from 'react-native';
import {DetContent} from '../../components/DetContent';
import Timer from '../../components/Timer';
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
    });
  }, []);
  console.log(Date.now())
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.1}>
          <DetAppBar pos={scrollOffsetY} />
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
              // h={initialLayout.height/1.8}
              justifyContent="space-between"
              borderTopRadius={'3xl'}>
              {/* <DetContent data={post} /> */}
              <List style={{borderTopColor: 'transparent'}}>
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    h={100}
                    px={2}
                    justifyContent="space-between">
                    <View justifyContent="center" flex={0.5}>
                      <Timer />
                    </View>
                    <Divider orientation="vertical" />
                    <View justifyContent="center" flex={0.5}>
                      <Text fontFamily={"B Yekan"} textAlign={'center'}>
                        {post.price}
                        {'تومان'}
                      </Text>
                    </View>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}>{post.title}</Text>
                    <Text fontFamily={"B Yekan"}>عنوان</Text>
                  </View>
                </List.Item>
                {/* <Divider /> */}
                {/* <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}>{post.price}</Text>
                    <Text fontFamily={"B Yekan"}>قیمت</Text>
                  </View>
                </List.Item> */}
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}>{post.capacity}</Text>
                    <Text fontFamily={"B Yekan"}>ظرفیت</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}>{post.durationTime}</Text>
                    <Text fontFamily={"B Yekan"}>مدت زمان</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}> {formDate(post.date)}</Text>
                    <Text fontFamily={"B Yekan"}>تاریخ</Text>
                  </View>
                </List.Item>
                <Divider />

                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Pressable
                      onPress={() => {
                        navigation.navigate('CampProfile', {
                          id: creator.id,
                        });
                      }}>
                      <Badge colorScheme={'danger'}>
                        <Text fontFamily={"B Yekan"}>{creator.name}</Text>
                      </Badge>
                    </Pressable>
                    <Text fontFamily={"B Yekan"}>میزبان</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Joineds />
                    <Text fontFamily={"B Yekan"}>افرادعضوشده</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    h={100}
                    justifyContent="space-between">
                    <Text fontFamily={"B Yekan"}>{post.description}</Text>
                    <Text fontFamily={"B Yekan"}>توضیحات</Text>
                  </View>
                </List.Item>
              </List>
            </View>
          </ScrollView>
        </View>
        <DetFooter />
      </View>
    </NativeBaseProvider>
  );
};
export default TourDet;
