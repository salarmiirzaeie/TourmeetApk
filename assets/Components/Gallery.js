import React from 'react';
import {
  HStack,
  Box,
  NativeBaseProvider,
  Image,
  ScrollView,
  View,
  Pressable,
  Modal,
  useDisclose,
  FlatList,
  Heading,
} from 'native-base';
import axios from 'axios';

import {Dimensions} from 'react-native';
const {width: windowWidth} = Dimensions.get('window');

const slideList = Array.from({length: 30}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

function Slide({data}) {
  /* 2. Get the param */
  return (
    <Image
      alt="ll"
      source={{uri: data.image}}
      style={{width: windowWidth, height: '100%'}}
    />
  );
}
export const Gallery = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
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
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
    'https://quickfit.ir/wp-content/uploads/2019/11/1-1-696x464.jpg',
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
  const [orgs, setdata] = React.useState(dataa);

  // React.useEffect(() => {
  //   Orginizers();
  // }, []);
  // const Orginizers = () => {
  //   axios.get(`http://192.168.43.153:3333/api/organization/list`).then(res => {
  //     setdata(res.data);
  //   });
  // };
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
      <View h={"full"}>
        <ScrollView>
        {dataa.slice(0, u).map((data, i) => (
          <HStack  flex={1} pr={1}  space={2}>
            {orgs.slice(3 * i, 3 * i + 3).map((data, i) => (
              <Pressable
                onPress={() =>
                  onOpen()
                  
                }
                flex={0.33}>
                <Box size={130}>
                  <Image
                    w="full"
                    h="full"
                    alt="ee"
                    source={{
                      uri: data,
                    }}
                  />

                  <Heading>{data.organizationName}</Heading>
                </Box>
              </Pressable>
            ))}
          </HStack>
        ))}
        </ScrollView>
       
      </View>
      <Modal
        backgroundColor={'black'}
        size={'full'}
        onClose={onClose}
        isOpen={isOpen}>
        <Modal.CloseButton />

        <Modal.Content flex={0.5}>
          <FlatList
            data={slideList}
            renderItem={({item}) => {
              return <Slide data={item} />;
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Modal.Content>

        <Modal.Footer display={'none'}></Modal.Footer>
      </Modal>
    </NativeBaseProvider>
  );
};
