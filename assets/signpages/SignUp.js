

import React from "react";
import axios from 'axios'
import { Formik } from 'formik';

import {
    Center,
    NativeBaseProvider,
    View,
    VStack,
    FormControl,
    Heading,
    Box,
    Input,Button,Link
  
  } from "native-base";

export const SignUp = ({navigation}) => {

  const onSubmit = data => {
    axios.post('http://192.168.43.153:3333/api/user/create', data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  };


    return <NativeBaseProvider>
        <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <Center>
            <Formik initialValues={{
    name: '',
    pass: '',
    telno:''
  }} onSubmit={onSubmit}>
      {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors
    }) => <VStack width="100%" space={4}>
          <FormControl isRequired isInvalid={'name' in errors}>
            <FormControl.Label>User Name</FormControl.Label>
            {console.log('errors', errors)}
            <Input onBlur={handleBlur('name')} placeholder="name" onChangeText={handleChange('name')} value={values.name} />
            {/* <FormControl.ErrorMessage>
              {errors.UserName}
            </FormControl.ErrorMessage> */}
          </FormControl>

          <FormControl isRequired isInvalid={'pass' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Input  onBlur={handleBlur('pass')} placeholder="pass" onChangeText={handleChange('pass')} value={values.pass} />
            {/* <FormControl.ErrorMessage>
              {errors.Password}
            </FormControl.ErrorMessage> */}
          </FormControl>
          <FormControl isRequired isInvalid={'telno' in errors}>
            <FormControl.Label>Comfirm Password</FormControl.Label>
            <Input onBlur={handleBlur('pass')} placeholder="telno" onChangeText={handleChange('telno')} value={values.telno} />
            {/* <FormControl.ErrorMessage>
              {errors.lastName}
            </FormControl.ErrorMessage> */}
          </FormControl>

          <Button onPress={handleSubmit} colorScheme="pink">
            Submit
          </Button>
        </VStack>}
    </Formik>

            </Center>
        
       
            
            
            
            
            
          
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }}onPress={()=>navigation.navigate("Login")}>
             Log In
            </Link>
          </VStack>
         
        </Box>
      </Center>
    </NativeBaseProvider>;
  };