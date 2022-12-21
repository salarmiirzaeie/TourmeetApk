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
} from 'native-base';

import {Animated} from 'react-native';
import {DetAppBar} from './DetAppBar';
import {DetFooter} from './DetFooter';
const Nodet = () => {
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
            <Skeleton h={300} />
            <View bg={'white'} mt={-3} borderTopRadius={'3xl'}>
              <List px={2} borderTopRadius={'3xl'}>
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />

                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Badge borderRadius={'lg'} colorScheme={'success.300'}>
                      <Skeleton.Text />
                    </Badge>
                    <Skeleton.Text />
                  </View>
                </List.Item>
                <Divider />
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />

                    <Skeleton.Text />
                  </View>
                </List.Item>
                <List.Item>
                  <View
                    pr={1.5}
                    flex={1}
                    justifyContent="space-between"
                    flexDirection={'row'}>
                    <Skeleton.Text />

                    <Skeleton.Text />
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
export default Nodet;
