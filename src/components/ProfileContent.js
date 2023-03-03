import React, {useEffect, useState} from 'react';
import {
  Center,
  NativeBaseProvider,
  View,
  HStack,
  Image,
  IconButton,
  Box,
  Heading,
  ScrollView,
  Text,
  Divider,
  Pressable,
  Badge,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {GalleryModal} from './GalleryModal';
import {useNavigation} from '@react-navigation/native';
export const ProfileContent = ({profile, mode, rate}) => {
  const navigation = useNavigation();
  return (
    <View bg="#F8F8F8" borderTopRadius={30} shadow={3} flex={0.8}>
      <Box size="170" mt={-85} bg="red.100" bg="transparent" alignSelf="center">
        <GalleryModal rate={rate} mode={mode} images={profile.profilePhotos} />
      </Box>

      <View pl={6} flex={1}>
        <View
          display={mode !== 'myprofile' ? 'none' : 'flex'}
          h={75}
          flexDirection="row">
          <View flex={0.85}>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} color="gray.400" fontFamily={'B Yekan'}>
                نام کاربری
              </Text>
            </View>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} fontFamily={'B YekanBold'}>
                {profile.username}
              </Text>
            </View>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <AntDesign name="user" size={24} color="black" />
          </View>
        </View>
        <View h={75} flexDirection="row">
          <View flex={0.85}>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} color="gray.400" fontFamily={'B Yekan'}>
                نام
              </Text>
            </View>

            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} fontFamily={'B YekanBold'}>
                {profile.name}
              </Text>
            </View>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <FontAwesome name="angellist" size={24} color="black" />
          </View>
        </View>
        <View
          display={mode !== 'myprofile' ? 'none' : 'flex'}
          h={75}
          flexDirection="row">
          <View flex={0.85}>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} color="gray.400" fontFamily={'B Yekan'}>
                تلفن
              </Text>
            </View>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} fontFamily={'B YekanBold'}>
                {profile.phoneNumber}
              </Text>
            </View>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <AntDesign name="phone" size={24} color="black" />
          </View>
        </View>
        <View
          display={mode !== 'myprofile' ? 'none' : 'flex'}
          h={75}
          flexDirection="row">
          <View flex={0.85}>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} color="gray.400" fontFamily={'B Yekan'}>
                ایمیل
              </Text>
            </View>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} fontFamily={'B YekanBold'}>
                {profile.email}
              </Text>
            </View>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <AntDesign name="mail" size={24} color="black" />
          </View>
        </View>

        <View h={75} flexDirection="row">
          <View flex={0.85}>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} color="gray.400" fontFamily={'B Yekan'}>
                درباره
              </Text>
            </View>
            <View justifyContent={'center'} flex={0.5}>
              <Text textAlign={'right'} fontFamily={'B YekanBold'}>
                {profile.description}
              </Text>
            </View>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <Feather name="info" size={24} color="black" />
          </View>
        </View>
        <View display={mode === 'camp' ? 'flex' : 'none'}>
          <View pr={5}>
            <Divider />
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate('PermissPage', {
                id: profile.id,
              })
            }
            h={75}
            flexDirection="row">
            <View justifyContent={'center'} alignItems="center" flex={0.15}>
              <AntDesign name="left" size={24} color="black" />
            </View>
            <View justifyContent={'center'} flex={0.7}>
              <Text alignSelf={'center'}>مجوزها</Text>
            </View>
            <View justifyContent={'center'} alignItems="center" flex={0.15}>
              <AntDesign name="switcher" size={24} color="black" />
            </View>
          </Pressable>
        </View>

        <Pressable
          display={mode === 'camp' ? 'flex' : 'none'}
          onPress={() =>
            navigation.navigate('CampTours', {
              id: profile.id,
            })
          }
          h={75}
          flexDirection="row">
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <AntDesign name="left" size={24} color="black" />
          </View>
          <View flexDirection={'row'} justifyContent={'center'} flex={0.7}>
            {/* <Circle>
              <Badge rounded={'full'} bg={'gray.300'}>
                5
              </Badge>
            </Circle> */}

            <Text alignSelf={'center'}>تورها</Text>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <MaterialCommunityIcons name="island" size={28} color="black" />
          </View>
        </Pressable>
        <Pressable
          display={mode === 'camp' ? 'flex' : 'none'}
          onPress={() =>
            navigation.navigate('LeadersPage', {
              id: profile.id,
            })
          }
          h={75}
          flexDirection="row">
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <AntDesign name="left" size={24} color="black" />
          </View>
          <View flexDirection={'row'} justifyContent={'center'} flex={0.7}>
            {/* <Circle>
              <Badge rounded={'full'} bg={'gray.300'}>
                5
              </Badge>
            </Circle> */}

            <Text alignSelf={'center'}>لیدرها</Text>
          </View>
          <View justifyContent={'center'} alignItems="center" flex={0.15}>
            <MaterialCommunityIcons
              name="human-greeting"
              size={28}
              color="black"
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};
