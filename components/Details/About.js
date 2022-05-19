import React from "react";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import { HStack, Divider, Text, ScrollView} from "native-base";
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
export const About = () => {
 
    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
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
          <Text>dsdsf</Text>
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
          <Text>dsdsf</Text>
        </HStack>
        <HStack space={1}>
          <Text>قیمت</Text>
          <MaterialIcons name="attach-money" size={20} color="green" />     
          
          
             </HStack>
      </HStack>
      <Divider />

      <HStack bg="white" justifyContent="space-between" w="100%" p={4}>
        <HStack>
          <Text>dsdsf</Text>
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
          <Text>dsdsf</Text>
        </HStack>
        <HStack space={1}>
          <Text>امتیاز</Text>
          <AntDesign name="star" size={20} color="gold" />       
          
           </HStack>
      </HStack>
      <Divider />
      <HStack bg="white" h={250}  justifyContent="space-between" w="100%" p={4}>
        <HStack>
          
        </HStack>
        <HStack>
          <Text>توضیحات</Text>
          <MaterialIcons name="description" size={20} color="skyblue" />
        </HStack>
      </HStack>
      
    </ScrollView>
      );
};
