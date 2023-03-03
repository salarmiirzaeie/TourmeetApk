import {useRoute} from '@react-navigation/native';
import {
  NativeBaseProvider,
  Input,
  VStack,
  Icon,
  Button,
  Text,
  View,
  HStack,
  Pressable,
  useDisclose,
  List,
  Divider,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import List2 from '../../components/List2';
import {getIndex} from '../../services/postServices';

const SearchPage = () => {
  const [sort, setSort] = useState('مرتبط ترین');
  const [serc, setserc] = useState(true);
  const [tours, setours] = useState([]);
  const [posts, setpots] = useState([]);
  const params = useRoute();
  const sorting = res => {
    const date = a => new Date(a);

    if (res === 1) {
      posts.sort((a, b) => date(a.createdAt) - date(b.createdAt));
      tours.sort((a, b) => date(a.createdAt) - date(b.createdAt));
    }
    if (res === 2) {
      posts.sort((a, b) => a.price - b.price);
      tours.sort((a, b) => a.price - b.price);
    }
    if (res === 3) {
      posts.sort((a, b) => b.capacity - a.capacity);
      tours.sort((a, b) => b.capacity - a.capacity);
    }
  };
  const searchTour = res => {
    let regex = new RegExp(res.text);

    setours(posts.filter(item => regex.test(item.title)));
  };
  useEffect(() => {
    getIndex().then(res => {
      if (res.status === 200) {
        if (params.params.text !== 'b') {
          setpots(
            res.data.posts.filter(
              q => q.type === params.params.text.toString(),
            ),
          );
        } else {
          setpots(res.data.posts);
        }
      }
    });
  }, []);
  const [visiblity, setvidsible] = useState(false);

  return (
    <NativeBaseProvider>
      <VStack w="100%" p={2} space={5} alignSelf="center">
        <Input
          autoFocus={true}
          onChange={q => {
            if (q.nativeEvent.text === '') {
              setserc(true);
            } else setserc(false);

            searchTour({text: q.nativeEvent.text});
          }}
          placeholder="جستجو..."
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
          // InputRightElement={
          //   <Icon
          //     m="2"
          //     mr="3"
          //     size="6"
          //     color="gray.400"
          //     as={<MaterialIcons name="mic" />}
          //   />
          // }
        />
        <View
          flexDirection="row"
          alignSelf={'flex-end'}
          px={1}
          justifyContent={'space-between'}>
          {/* <MaterialIcons name="list" /> */}
          <Pressable onPress={() => setvidsible(true)}>
            <View flexDirection={'row'}>
              <Text fontFamily={'B Yekan'}>{sort}</Text>

              <FontAwesome style={{fontSize: 20}} name="sort-amount-desc" />
            </View>
          </Pressable>
        </View>
      </VStack>
      {serc ? <List2 datas={posts} /> : <List2 datas={tours} />}
      <Modal
        onRequestClose={() => setvidsible(false)}
        size={'full'}
        visible={visiblity}>
        <View justifyContent={'center'} flex={1} p={5}>
          <Button
            onPress={() => {
              sorting(1);
              setSort('جدیدترین');

              setvidsible(false);
            }}>
            <Text fontFamily={'B Yekan'} textAlign={'right'}>
              {'جدیدترین'}
            </Text>
          </Button>
          <Divider />
          <Button
            onPress={() => {
              sorting(2);
              setSort('ارزان ترین');

              setvidsible(false);
            }}>
            <Text fontFamily={'B Yekan'} textAlign={'right'}>
              {'ارزان ترین'}
            </Text>
          </Button>
          <Divider />
          <Button
            onPress={() => {
              sorting(3);
              setSort(' محبوبترین');

              setvidsible(false);
            }}>
            <Text fontFamily={'B Yekan'} textAlign={'right'}>
              {' محبوبترین'}
            </Text>
          </Button>
        </View>
      </Modal>
    </NativeBaseProvider>
  );
};
export default SearchPage;
