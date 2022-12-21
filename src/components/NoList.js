import React, {useState} from 'react';
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
  NativeBaseProvider,
  Skeleton,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NoList = () => {
  const [dataa, setdata] = useState(['1', '2', '3', '4', '5']);
  return (
    <NativeBaseProvider>
      <ScrollView flexDirection="column" showsVerticalScrollIndicator={false}>
        <VStack pl={2} pt={1} pr={2} space={1}>
          {dataa.map((data, i) => (
            <View
              w="full"
              h="130"
              borderRadius={'lg'}
              bg="white"
              flexDirection="row"
              rounded="md"
              shadow={3}
              key={i}
              p={1}>
              <View flex={0.4}>
                <Skeleton rounded="md" h="full" w="full" alt="ee" />
              </View>

              <View flex={0.6} p={1} flexDirection={'column'}>
                <View flex={0.7} flexDirection="column">
                 
                  <View p={1} flex={0.5}>
                    <Skeleton.Text color="black" />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};
export default React.memo(NoList);
