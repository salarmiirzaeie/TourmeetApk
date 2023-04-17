import {View, Text, Box, Avatar, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {formDate2} from '../utils/helpers';
import {getUser} from '../services/postServices';
import {useNavigation, useRoute} from '@react-navigation/native';

export const Comment = ({cm}) => {
  const navigation = useNavigation();
  return (
    <View w={'full'} flexDirection={'row-reverse'}>
      <Pressable
        onPress={() => {
          navigation.navigate('UserProfile', {
            id: cm.userId,
          });
        }}
        alignSelf={'center'}>
        <Avatar
          size={'9'}
          source={{
            uri: `http://192.168.43.153:3333/uploads/profilePhotos/${cm.profilephoto}`,
          }}
        />
      </Pressable>

      <Box
        flex={0.99}
        bg={'white'}
        my={0.5}
        mr={0.5}
        style={{
          borderWidth: 1,
          borderRadius: 7,
          borderColor: 'lightgray',
        }}
        variant={'outline'}
        p={1}>
        <Pressable
          onPress={() => {
            navigation.navigate('UserProfile', {
              id: cm.userId,
            });
          }}>
          <Text textAlign={'right'} fontFamily={'B YekanBold'}>
            {cm.username}
          </Text>
        </Pressable>

        <Text mr={2}>{cm.comment}</Text>
        <Text alignSelf={'flex-start'} color={'gray.400'} fontSize={10}>
          {formDate2(cm.createdAt)}
        </Text>
      </Box>
    </View>
  );
};
