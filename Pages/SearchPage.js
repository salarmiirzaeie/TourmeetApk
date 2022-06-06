import {NativeBaseProvider, Input, VStack, Icon, Button} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import List from '../components/Explore/List';

export const SearchPage = () => {
  const [dataa, setdata] = React.useState([]);

  const handleChange = text => {
    getTours(text);
  };

  const getTours = data => {
    const dataa = {
      title: data
    };
    axios
    .post('http://192.168.43.153:3333/api/tour/search', dataa)
      .then(function (response) {
       

        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <NativeBaseProvider>
      <VStack w="100%" p={2} space={5} alignSelf="center">
        <Input
          onChangeText={handleChange}
          autoFocus={true}
          placeholder="Search People & Places"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
       
      </VStack>
      <List datas={dataa}/>
    </NativeBaseProvider>
  );
};
