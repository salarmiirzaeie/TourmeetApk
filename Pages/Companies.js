import React from 'react';
import {
  HStack,
  Box,
  NativeBaseProvider,
  Image,
  ScrollView,
  Heading,
  Pressable,
} from 'native-base';
import {AppBar2} from '../components/Camp/Appbar2';
import axios from 'axios';

export const Companies = ({navigation}) => {
  const [orgs, setdata] = React.useState([]);

  React.useEffect(() => {
    Orginizers();
  }, []);
  const Orginizers = () => {
    axios.get(`http://192.168.43.153:3333/api/organization/list`).then(res => {
      setdata(res.data);
    });
  };
  // var j=0;
  // var u;
  // var s=dataa.length/3
  // var t=dataa.length%3
  // if(t==0){
  //   u =parseInt(s)

  // }
  // else{
  //   u =parseInt(s+1)

  // }

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: '1',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: '2',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: '3',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: '4',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: '5',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  var u;
  var s = orgs.length / 3;
  var t = orgs.length % 3;
  if (t == 0) {
    u = parseInt(s);
  } else {
    u = parseInt(s + 1);
  }

  return (
    <NativeBaseProvider>
      <AppBar2 />
      <ScrollView>
        {orgs.slice(0, u).map((daata, i) => (
          <HStack pt={1} flex={1} pr={1} pl={2.5} space={1}>
            {orgs.slice(3 * i, 3 * i + 3).map((data, i) => (
              <Pressable
                onPress={() =>
                  navigation.navigate('Profile', {
                    id: data.id,
                  })
                }
                flex={0.33}>
                <Box size={130}>
                  <Image
                    w="full"
                    rounded="xl"
                    h="full"
                    alt="ee"
                    source={{
                      uri: data.logoUrl,
                    }}
                  />

                  <Heading>{data.organizationName}</Heading>
                </Box>
              </Pressable>
            ))}
          </HStack>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
};
