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
              <List>
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text>{post.title}</Text>
                    <Text>عنوان</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text>{post.price}</Text>
                    <Text>قیمت</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text>{post.capacity}</Text>
                    <Text>ظرفیت</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text>{post.durationTime}</Text>
                    <Text>مدت زمان</Text>
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    flexDirection={'row'}
                    flex={1}
                    px={2}
                    justifyContent="space-between">
                    <Text> {formDate(post.date)}</Text>
                    <Text>تاریخ</Text>
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
                        <Text>{creator.name}</Text>
                      </Badge>
                    </Pressable>
                    <Text>میزبان</Text>
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
                    <Text>افرادعضوشده</Text>
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
                    <Text>{post.description}</Text>
                    <Text>توضیحات</Text>
                  </View>
                </List.Item>
                <Divider />
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
