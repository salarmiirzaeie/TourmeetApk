import React from "react";
import {
  Center,
  Box,
  Badge,
  Pressable,
  Image,
  ScrollView,
  HStack,
} from "native-base";
import AntDesign  from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export const PopularCompanies = () => {
  const navigation=useNavigation()
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <HStack space={5} direction="row">
        <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Box  bg="white" h="70" w="70" rounded="full" shadow={7}>
          <Badge
            bg="#8F95D3"
            rounded="full"
            mb={-5}
            zIndex={99}
            variant="solid"
            alignSelf="flex-start"
            _text={{
              fontSize: 10,
            }}
          >
            9.8
          </Badge>
          <Image
            rounded="full"
            h="full"
            alt="ee"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
            }}
          />
        </Box>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Box  bg="white" h="70" w="70" rounded="full" shadow={7}>
          <Badge
            bg="#8F95D3"
            rounded="full"
            mb={-5}
            zIndex={99}
            variant="solid"
            alignSelf="flex-start"
            _text={{
              fontSize: 10,
            }}
          >
            9.8
          </Badge>
          <Image
            rounded="full"
            h="full"
            alt="ee"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
            }}
          />
        </Box>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Box  bg="white" h="70" w="70" rounded="full" shadow={7}>
          <Badge
            bg="#8F95D3"
            rounded="full"
            mb={-5}
            zIndex={99}
            variant="solid"
            alignSelf="flex-start"
            _text={{
              fontSize: 10,
            }}
          >
            9.8
          </Badge>
          <Image
            rounded="full"
            h="full"
            alt="ee"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
            }}
          />
        </Box>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate("Profile")}>
          <Box  bg="white" h="70" w="70" rounded="full" shadow={7}>
          <Badge
            bg="#8F95D3"
            rounded="full"
            mb={-5}
            zIndex={99}
            variant="solid"
            alignSelf="flex-start"
            _text={{
              fontSize: 10,
            }}
          >
            9.8
          </Badge>
          <Image
            rounded="full"
            h="full"
            alt="ee"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O9dtxVlqdBW5i4Bp9SQxVixLhAvaLMbtsiWiH4BOX0RD5GqEU5kdETrLXCju__-uiIA&usqp=CAU",
            }}
          />
        </Box>
        </Pressable>
      
        <Pressable onPress={() => navigation.navigate("Companies")}>
          <Box bg="gray.200" h="70" w="70" rounded="full" shadow={7}>
            <Center h="70" w="70">
              <AntDesign name="plus" color="white" size={30} />
            </Center>
          </Box>
        </Pressable>
      </HStack>
    </ScrollView>
  );
};
