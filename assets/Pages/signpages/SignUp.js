

import React from "react";
import axios from 'axios'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux'

import {
    Center,
    NativeBaseProvider,
    View,
    VStack,
    FormControl,
    Heading,
    Box,
    Input,Button,Link,IconButton,Menu,Divider,Text, Circle,Color
  
  } from "native-base";
  import { login } from "../../State-Management/actions/LoginAction";
  import  AntDesign  from 'react-native-vector-icons/AntDesign';
  import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
  import Feather  from 'react-native-vector-icons/Feather';
export const SignUp = ({navigation}) => {
  const dispatch=useDispatch();

  const onSubmit = data => {
    axios.post('http://192.168.43.153:3333/api/user/create', data)
    .then(function (response) {
      if(response.status==201){
        dispatch(login())


      }
    })
    .catch(function (error) {
      console.log(error);
    });
   
  };


    return <NativeBaseProvider>
<View bg={"white"} flex={1} w={"100%"}   alignItems={"center"}>
  
  <View w={"100%"}   flex={0.1}>
    <Center>    <Menu mr={10} bg="white" marginRight={120}  defaultIsOpen={false}  w="150" trigger={triggerProps => {
                return (

                <Box flexDirection={"row"}>
                  <Text>English</Text>
                      <IconButton

_icon={{
  as: AntDesign,
  name: "down",
  color: "gray.400",
  size:3,
  mt:-1
}}
{...triggerProps}
/>
                </Box>
            
                
                )
              }
              
              
              
              }>
                
                  <Menu.Item>Arial</Menu.Item>
                  <Menu.Item>Nunito Sans</Menu.Item>
                  <Menu.Item>Roboto</Menu.Item>
              
               
              </Menu>
</Center>
    
    </View>
    <View  w={"100%"} flex={0.8} >
      
    <Center  flex={1}>

      <Text fontSize={50} bold={true}>Tourino</Text>
          <View w={"80%"}>

          <Formik initialValues={{
    name: '',
    pass: '',
    telno:'',
    avatarUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Fdefault-profile-icon-24.html&psig=AOvVaw38RXRculTcN8fDesUfBRX1&ust=1653252625615000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLiF6ZS88fcCFQAAAAAdAAAAABAh"
  }} onSubmit={onSubmit}>
      {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      
    }) => <VStack width="100%" space={4}>

          <FormControl isRequired >
            {/* <FormControl.Label>User Name</FormControl.Label> */}
            <Input bgColor={"gray.100"} onBlur={handleBlur('name')} placeholder="UserName" onChangeText={handleChange('name')} value={values.name} />
           
          </FormControl>

          <FormControl isRequired >
            {/* <FormControl.Label>Password</FormControl.Label> */}
            <Input bgColor={"gray.100"} onBlur={handleBlur('pass')} placeholder="Password" onChangeText={handleChange('pass')} value={values.pass} />
           
          </FormControl>
          <FormControl isRequired>
            {/* <FormControl.Label>Comfirm Password</FormControl.Label> */}
            <Input  bgColor={"gray.100"} onBlur={handleBlur('pass')} placeholder="ConfirmPassword" onChangeText={handleChange('telno')} value={values.telno} />
          
          </FormControl>

          <Button onPress={handleSubmit} bg="#8F95D3">
            Submit
          </Button>
          <Divider/>
          <View mt={2}  p={1} flexDirection="row" justifyContent="space-between">
          <Circle size={50}shadow={7} bg="#00A693">
                <AntDesign name="google" size={30}  />
              </Circle>

                <Circle size={50}  shadow={7} bg="#00A693">
                <AntDesign name="github" size={30}  />
              </Circle>
              <Circle size={50}  shadow={7} bg="#00A693">
                <Feather name="linkedin" size={30}  />
              </Circle>           

          </View>

        </VStack>}
    </Formik>

          </View>
       
         
           
      </Center>
    </View>
    <View w="100%"  flex={0.1}>
      <View flex={0.5}>
      </View>
      <Divider/>

      <View flex={0.5} pl={10}><Text>cd</Text>
</View>

    </View>
</View>
       
    </NativeBaseProvider>;
  };