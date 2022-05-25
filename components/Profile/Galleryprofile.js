import React from "react";
import {

  HStack,
  Box,
 
  NativeBaseProvider,
 
  Image,

  ScrollView,
  View
} from "native-base";

export const Galleryprofile = (gallery) => {
  const res = gallery.gallery.gallery
  if (res == undefined) return <View></View>
  else
    return (
      <NativeBaseProvider>
        <ScrollView showsVerticalScrollIndicator={false}>
          {res.map((data, i) => (

            <HStack           borderRadius={10}
            pt={1} key={i} pl={0.5} flexDirection="row" flex={1} space={1}>
              {res.slice(0, 3).map((data, i) => (
                <Box key={i} h={130} flex={0.33}>

                  <Image
                    w="full"
                    h="full"
                    alt="ee"
                    source={{
                      uri: data,
                    }}
                  />
                </Box>

              ))}







            </HStack>
          ))}
        </ScrollView>

      </NativeBaseProvider>
    );
};


