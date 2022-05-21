import React from "react";
import {
  Pressable,
  Text,
  ScrollView,
  Image,
  VStack,
  Box,
  HStack,
  View,
  Center,
  Divider,
  NativeBaseProvider
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import  AntDesign  from 'react-native-vector-icons/AntDesign';

 const List = () => {
  const [dataa, setdata] = React.useState([]);


  React.useEffect(() => {
    getTours();
  }, []);
  const getTours = () => {
    const apiUrl = "http://192.168.43.153:3333/api/tour/list";
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setdata(data);
          console.log(dataa)
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
        <ScrollView

flexDirection="column"
showsVerticalScrollIndicator={false}

>
<VStack pl={2}pt={1} pr={2} space={1} >
  {dataa.map((data, i) => (
    <Pressable
      w="full"
      h="130"
      borderRadius={"lg"}
      bg="white"
      flexDirection="row"
      rounded="md"
      shadow={3}
      key={i}
      onPress={() => navigation.navigate("TourDet3")}
      p={1}
      
    >
      <Image
        rounded="md"
        h="full"
        flex={0.4}
        alt="ee"
        source={{
          uri: data.bannerUrl,
        }}
      />
      <View flex={0.6} p={1} flexDirection={"column"}>
        <View flex={0.7} flexDirection="column">
          <View p={1} flexDirection="row" flex={0.5}>
            <View p={1} flexDirection="column" flex={0.3}>
              <AntDesign name="heart" size={15} color="red" />

              <Text color="black" fontSize={12} bold={true}>1.2k</Text>

            </View>
            <Text flex={0.7} fontSize={"lg"} bold={true} textAlign={"right"}>{data.title}</Text>
          </View>
          <View p={1} flex={0.5}>
            <Text color={"gray.500"} fontSize={"md"} textAlign={"right"}>اوجامان کلاپ</Text>
          </View>
        </View>

        <View flex={0.3} flexDirection={"row"} justifyContent={"space-between"}>
          <View flexDirection={"row"} flex={0.3}>
            <Center justifyContent={"space-between"} flexDirection={"row"} m={"auto"}>
              <Text fontSize={"xs"}> {data.description}</Text>

            </Center>


          </View>
          <Divider orientation="vertical" />
          <View flex={0.3}>
            <Center m={"auto"}>{data.price}</Center>

          </View>
          <Divider orientation="vertical" />

          <View flex={0.3}>
            <Center m={"auto"}>{data.capacity}</Center>
          </View>


        </View>


      </View>
    </Pressable>
  ))}
</VStack>
</ScrollView>
    </NativeBaseProvider>

  
  );
};
export default React.memo(List)
