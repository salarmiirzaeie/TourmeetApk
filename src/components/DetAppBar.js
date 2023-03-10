import {
  HStack,
  IconButton,
  Menu,
  Pressable,
  Box,
  HamburgerIcon,
  Divider,
  NativeBaseProvider,
} from 'native-base';

import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isSaved, saveTour, unSaveTour} from '../services/dashboardServices';
import {Animated, Alert} from 'react-native';

export const DetAppBar = ({pos, share}) => {
  const navigation = useNavigation();
  const logedin = useSelector(state => state.profileModeState);
  const [saved, setsaved] = useState(false);
  const params = useRoute();
  const animateHeaderBackgroundColor = pos.interpolate({
    inputRange: [0, 200],

    outputRange: ['transparent', '#24C2D8'],
    extrapolate: 'clamp',
  });
  const animateHeaderTextColor = pos.interpolate({
    inputRange: [0, 200],

    outputRange: ['white', 'black'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (logedin) {
      isSaved({postId: params.params.id}).then(res => {
        if (res.status === 200) {
          setsaved(res.data);
        }
      });
    }
  }, []);
  return (
    <NativeBaseProvider>
      <Animated.View
        justifyContent="space-between"
        style={{
          backgroundColor: animateHeaderBackgroundColor,
          zIndex: 99,
          width: '100%',
          borderRadius: 10,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        <HStack colorScheme={'red.400'} borderRadius="full">
          <IconButton
            onPress={() => navigation.goBack()}
            // bg={'gray.400'}
            size={'sm'}
            borderRadius="2xl"
            colorScheme={animateHeaderTextColor}
            _icon={{
              as: AntDesign,
              name: 'right',
              size: 7,
              shadow: 5,
              color: 'white',
            }}
          />
        </HStack>
        <HStack space={1}>
          {saved ? (
            <HStack borderRadius="full">
              <IconButton
                // bg={'gray.400'}
                size={'sm'}
                borderRadius="2xl"
                onPress={() => {
                  setsaved(false);

                  unSaveTour({postId: params.params.id});
                }}
                _icon={{
                  as: MaterialIcons,
                  name: 'bookmark',
                  color: 'white',
                  size: 7,
                }}
              />
            </HStack>
          ) : (
            <HStack borderRadius="full">
              <IconButton
                // bg={'gray.400'}
                size={'sm'}
                borderRadius="2xl"
                onPress={() => {
                  if (!logedin) {
                    Alert.alert('واردحساب کاربری خودشوید');
                  } else {
                    setsaved(true);

                    saveTour({postId: params.params.id});
                  }
                }}
                _icon={{
                  as: MaterialIcons,
                  name: 'bookmark-outline',
                  color: 'white',
                  size: 7,
                }}
              />
            </HStack>
          )}

          <HStack borderRadius="full">
            <Box>
              <IconButton
                onPress={() => share()}
                // bg={'gray.400'}
                size={'md'}
                borderRadius="2xl"
                _icon={{
                  as: Feather,
                  name: 'share',
                  color: 'white',
                  size: 6,
                }}
              />
            </Box>
          </HStack>
        </HStack>
      </Animated.View>
    </NativeBaseProvider>
  );
};
