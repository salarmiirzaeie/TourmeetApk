import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HStack, Divider, Text, ScrollView, View} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
export const About = aboutdata => {
  
  var datan;
  if(aboutdata.aboutdata==undefined){
    datan={}

  }
  else{
    datan=aboutdata.aboutdata
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>dsdsf</Text>
        </HStack>
        <HStack space={1}>
          <Text>مقصد</Text>
          <MaterialCommunityIcons
            name="map-marker-check"
            size={20}
            color="green"
          />
        </HStack>
      </HStack>
      <Divider />
      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>dsdsf</Text>
        </HStack>
        <HStack space={1}>
          <Text>مبدا</Text>
          <MaterialCommunityIcons
            name="map-marker-down"
            size={20}
            color="red"
          />
        </HStack>
      </HStack>
      <Divider />

      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>{datan.duration}</Text>
        </HStack>
        <HStack space={1}>
          <Text>مدت زمان</Text>
          <MaterialCommunityIcons
            name="clock-time-nine"
            size={20}
            color="skyblue"
          />
        </HStack>
      </HStack>
      <Divider />
      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>{datan.price}</Text>
        </HStack>
        <HStack space={1}>
          <Text>قیمت</Text>
          <MaterialIcons name="attach-money" size={20} color="green" />
        </HStack>
      </HStack>
      <Divider />

      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>{datan.capacity}</Text>
        </HStack>
        <HStack space={1}>
          <Text>ظرفیت</Text>
          <Ionicons name="ios-person-add" size={20} color="red" />
        </HStack>
      </HStack>
      <Divider />
      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>dsdsf</Text>
        </HStack>
        <HStack space={1}>
          <Text>تعدادافراد عضوشده</Text>
          <Ionicons name="person-remove" size={20} color="skyblue" />
        </HStack>
      </HStack>
      <Divider />

      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>{datan.ratings}</Text>
        </HStack>
        <HStack space={1}>
          <Text>امتیاز</Text>
          <AntDesign name="star" size={20} color="gold" />
        </HStack>
      </HStack>
      <Divider />
      <HStack
        flexDirection={'column'}
        bg="white"
        h={250}
        justifyContent="space-between"
        w="100%"
        p={4}>
        <View alignSelf={'flex-end'} flexDirection={'row'}>
          <Text>توضیحات</Text>
          <MaterialIcons name="description" size={20} color="skyblue" />
        </View>
        <View mt={4} p={1} flex={1}>
          <Text textAlign={'right'}>{datan.description}</Text>
        </View>
      </HStack>
    </ScrollView>
  );
};
