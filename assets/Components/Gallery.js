import React from 'react';
import {
  HStack,
  Box,
  NativeBaseProvider,
  Image,
  ScrollView,
  View,
  Pressable,Modal,useDisclose,FlatList
} from 'native-base';
import { Dimensions } from "react-native"
const { width: windowWidth } = Dimensions.get("window");
const dataa = [
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
  ];
const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
       
    };
});

function Slide({ data }) {
      /* 2. Get the param */
    return (

        <Image
        
            alt='ll'
            source={{ uri: data.image }}
            style={{ width: windowWidth, height: "100%" }}
        />


    );
}
export const Gallery = () => {
    const {
        isOpen,
        onOpen,onClose
      } = useDisclose();
  

  return (
    <NativeBaseProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataa.map((data, i) => (
          <HStack
            borderRadius={10}
            pt={1}
            key={i}
            pl={0.5}
            flexDirection="row"
            flex={1}
            space={1}>
            {dataa.slice(0, 3).map((data, i) => (
              <Box key={i} h={130} flex={0.33}>
                <Pressable onPress={onOpen}>
                  <Image
                    w="full"
                    h="full"
                    alt="ee"
                    source={{
                      uri: data,
                    }}
                  />
                </Pressable>
              </Box>
            ))}
          </HStack>
        ))}
      </ScrollView>



      <Modal backgroundColor={"black"} size={"full"} onClose={onClose} isOpen={isOpen}>
<Modal.CloseButton/>

    <Modal.Content flex={0.5}>
    <FlatList
                  
                  data={slideList}
                  renderItem={({ item }) => {
                      return (
                    <Slide data={item} />
                   );
                  }}
                  pagingEnabled
                  horizontal
                  showsHorizontalScrollIndicator={false}
              />  
              
                </Modal.Content>


                <Modal.Footer display={"none"}></Modal.Footer>
</Modal>
    </NativeBaseProvider>
  );
};
