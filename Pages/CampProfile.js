import React, {useState, useEffect} from 'react';
import {
  NativeBaseProvider,
  View,
  HStack,
  Image,
  Text,
  IconButton,
  Box,
  Divider,
  Heading,
  useDisclose,
  Button,
} from 'native-base';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LogOut, login} from '../assets/State-Management/actions/LoginAction';
import {useDispatch} from 'react-redux';
import {Profileabout} from '../components/Profile/Profileabout';
import {useSelector} from 'react-redux';

export const CampProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclose();
  const Profile = useSelector(store => store.ProfileStete);
  return (
    <NativeBaseProvider bg="#F1F5F2">
      <View flex={1} bg="#8F95D3">
        <HStack
          justifyContent="space-between"
          bg="transparent"
          w="100%"
          p={1}
          borderRadius={10}>
          <HStack>
            <IconButton
              _icon={{
                as: AntDesign,
                name: 'qrcode',
                color: 'white',
                size: 7,
              }}
            />
          </HStack>

          <HStack>
            <IconButton
              //   onPress={onOpen}
              _icon={{
                as: Ionicons,
                name: 'menu-outline',
                color: 'white',
                size: 8,
              }}
            />
          </HStack>
        </HStack>
        <View flexDirection="row" p={4}>
          <Box size="79" bg="red.100" rounded="full">
            <Image
              rounded="full"
              h={20}
              W={20}
              alt="ee"
              source={{
                uri: Profile.avatarUrl,
              }}
            />
          </Box>
          <View
            flex={0.9}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            ml={10}>
            <Heading> {Profile.name}</Heading>
          </View>
        </View>

        <View
          bg="white"
          borderRadius={30}
          mt={0}
          zIndex={-50}
          w={405}
          flex={0.2}
          style={styles.container}></View>
        <View bg="white"  zIndex={99} mt={-20} flex={0.8}>
            <View flex={0.15} justifyContent="space-between" p={3}>
            <Box>Confirm your phonenumber to access everythings</Box>
            <Button onPress={()=>navigation.navigate("ConfirmationPage")} bg={"cyan.400"} size={"sm"}>Confirm</Button>
            </View>
            <Divider  bg={"gray.100"}/>
            <View justifyItems={"center"} flexDirection={"row"} flex={0.1} p={3}>
              <Ionicons size={20} name='key'/>
              <Text>Account</Text>
            </View>
            <Divider bg={"gray.100"}/>
            <View flex={0.1}  p={3}>
                <Box>d</Box>
            </View>
            <Divider  bg={"gray.100"}/>
            <View flex={0.1}  p={3}>
                <Box>d</Box>
            </View>
            <Divider  bg={"gray.100"}/>
            <View flex={0.1} p={3}>
                <Box>d</Box>
            </View>
           
        </View>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    transform: [{rotate: '-7deg'}],
  },
});
