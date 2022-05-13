import React from "react";
import {  Pressable, Image, ScrollView, HStack, View,Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import  AntDesign from 'react-native-vector-icons/AntDesign';
export const HomeCategories = () => {
  const navigation = useNavigation()
  return (
    <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled={true} horizontal={true}>
      <HStack h="95%" W="full" space={4} justifyContent="center">
        <Pressable
          onPress={() => navigation.navigate("List")}
          h="full"
          w="40"
          rounded="lg"
          shadow={6}
        >
          <Image
            rounded="lg"
            h="full"
            W="full"
            alt="ee"
            source={{
              uri: "https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg",
            }}
          />

           <View p={1} flexDirection="column" position="absolute" h="99%"  w="100%">
             <View flexDirection="column" flex={0.2}>

             <AntDesign name="heart" size={24} color="red" />

             <Text color="white" fontSize={12} bold={true}>1.2k</Text>
             </View>
             <View  flex={0.6}></View>
             <View opacity={0.6} bg="gray.600" borderRadius="xl" flex={0.2}>

             <Text alignSelf="center" fontSize={20} bold={true} color="white">تورسه روزه کلیبر</Text>

             </View>

          </View> 
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("List")}
          h="full"
          w="40"
          rounded="lg"
          shadow={6}
        >
          <Image
            rounded="lg"
            h="full"
            W="full"
            alt="ee"
            source={{
              uri: "https://intoday.ir/wp-content/uploads/2020/10/Sari-Rush-Forest1-780x470.jpg",
            }}
          />
           <View p={1} flexDirection="column" position="absolute" h="99%"  w="100%">
             <View flexDirection="column" flex={0.2}>

             <AntDesign name="heart" size={24} color="red" />

             <Text color="white" fontSize={12} bold={true}>1.2k</Text>
             </View>
             <View  flex={0.6}></View>
             <View opacity={0.6} bg="gray.600" borderRadius="xl" flex={0.2}>

             <Text alignSelf="center" fontSize={20} bold={true}  color="white">توردو روزه قره داغ</Text>

             </View>

          </View> 
          {/* <Center  position="absolute" h="99%"  w="40%">
            <JoinedPeople />
          </Center> */}
        </Pressable>
        <Pressable h="full" w="40" rounded="lg" shadow={6}>
          <Image
            rounded="lg"
            h="full"
            W="full"
            alt="ee"
            source={{
              uri: "https://cdn.isna.ir/d/off-old/Isfahan/Files/News/Image/139611/111528.jpg",
            }}
          />
          <View p={1} flexDirection="column" position="absolute" h="99%"  w="100%">
             <View flexDirection="column" flex={0.2}>

             <AntDesign name="heart" size={24} color="red" />

             <Text color="white" fontSize={12} bold={true}>1.2k</Text>
             </View>
             <View  flex={0.6}></View>
             <View opacity={0.6} bg="gray.600" borderRadius="xl" flex={0.2}>

             <Text alignSelf="center" fontSize={20} bold={true}  color="white">توردو روزه قره داغ</Text>

             </View>

          </View> 
          {/* <Center  position="absolute" h="99%"  w="40%">
            <JoinedPeople />
          </Center> */}
        </Pressable>
        <Pressable h="full" w="40" rounded="lg" shadow={6}>
          <Image
            rounded="lg"
            h="full"
            W="full"
            alt="ee"
            source={{
              uri: "https://cdn.makanchi.com/Images/Blog/20200205157/600_400/Makanchi_1820xmbpmFB.jpg",
            }}
          />
          <View p={1} flexDirection="column" position="absolute" h="99%"  w="100%">
             <View flexDirection="column" flex={0.2}>

             <AntDesign name="heart" size={24} color="red" />

             <Text color="white" fontSize={12} bold={true}>1.2k</Text>
             </View>
             <View  flex={0.6}></View>
             <View opacity={0.6} bg="gray.600" borderRadius="xl" flex={0.2}>

             <Text alignSelf="center" fontSize={20} bold={true}  color="white">توردو روزه قره داغ</Text>

             </View>

          </View> 
           {/* <Center  position="absolute" h="99%"  w="40%">
            <JoinedPeople />
          </Center> */}
        </Pressable>
      </HStack>
    </ScrollView>
  );
};
