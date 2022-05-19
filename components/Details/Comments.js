import React from "react";
import {
  NativeBaseProvider,

  HStack,
 
  View,
 
  VStack,
  ScrollView,
  Avatar,
  Text,
  Box,
  Divider
} from "native-base";
export const Comments = () => {
  return (
    <NativeBaseProvider>
      <ScrollView  showsVerticalScrollIndicator={false} pt={0}>
        <VStack space={2} alignItems="center">
          <View p={1.5} w="full" flexDirection="row" bg="white" rounded="md">
            <Avatar
              size="md"
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              AJ
            </Avatar>
            <VStack flex={1} space={1}>
              <Text>Salarmirzaeie</Text>

              <Text textAlign="right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم گیرد.
              </Text>
              <HStack flex={1}>
                <Box w="33%">17h</Box>
                <Box w="33%">50Likes</Box>
                <Box w="33%">Reply</Box>
              </HStack>
            </VStack>
          </View>
        </VStack>
       <Divider/>
        <VStack space={2} alignItems="center">
          <View p={1.5} w="full" flexDirection="row" bg="white" rounded="md">
            <Avatar
              size="md"
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              AJ
            </Avatar>
            <VStack flex={1} space={1}>
              <Text>Salarmirzaeie</Text>

              <Text textAlign="right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                قرار گیرد.
              </Text>
              <HStack flex={1}>
                <Box w="33%">17h</Box>
                <Box w="33%">50Likes</Box>
                <Box w="33%">Reply</Box>
              </HStack>
            </VStack>
          </View>
        </VStack>
       <Divider/>
        <VStack space={2} alignItems="center">
          <View p={1.5} w="full" flexDirection="row" bg="white" rounded="md">
            <Avatar
              size="md"
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              AJ
            </Avatar>
            <VStack flex={1} space={1}>
              <Text>Salarmirzaeie</Text>

              <Text textAlign="right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                قرار گیرد.
              </Text>
              <HStack flex={1}>
                <Box w="33%">17h</Box>
                <Box w="33%">50Likes</Box>
                <Box w="33%">Reply</Box>
              </HStack>
              <VStack space={2} alignItems="center">
          <View p={1.5} w="full" flexDirection="row" bg="white" rounded="md">
            <Avatar
              size="md"
              bg="green.500"
              source={{
                uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80",
              }}
            >
              AJ
            </Avatar>
            <VStack flex={1} space={1}>
              <Text>Salarmirzaeie</Text>

              <Text textAlign="right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم گیرد.
              </Text>
              <HStack flex={1}>
                <Box w="33%">17h</Box>
                <Box w="33%">50Likes</Box>
                <Box w="33%">Reply</Box>
              </HStack>
            </VStack>
          </View>
        </VStack>
            </VStack>
            
          </View>
        </VStack>
       <Divider/>
      </ScrollView>
    </NativeBaseProvider>
  );
};
