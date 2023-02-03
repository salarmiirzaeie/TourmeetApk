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
  Modal,
  useDisclose,
  List,
  Divider,
} from 'native-base';
import React, {useEffect, useState} from 'react';
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
      if (params.params.text !== 'b') {
        setpots(
          res.data.posts.filter(q => q.type === params.params.text.toString()),
        );
      } else {
        setpots(res.data.posts);
      }
    });
  }, []);
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <NativeBaseProvider>
      <VStack w="100%" p={2} space={5} alignSelf="center">
        <Input
          autoFocus={true}
          onChange={q => {
            console.log(q);
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
          w={'60%'}
          px={1}
          justifyContent={'space-between'}>
          {/* <MaterialIcons name="list" /> */}
          <Pressable onPress={onOpen}>
            <View flexDirection={'row'}>
              <Text fontFamily={"B Yekan"}>{sort}</Text>

              <FontAwesome style={{fontSize: 20}} name="sort-amount-desc" />
            </View>
          </Pressable>

          <FontAwesome style={{fontSize: 20}} name="filter" />
        </View>
      </VStack>
      {serc ? <List2 datas={posts} /> : <List2 datas={tours} />}
      <Modal
        backgroundColor={'black'}
        size={'full'}
        onClose={onClose}
        isOpen={isOpen}>
        <Modal.Content h={'100%'}>
          <List>
            <List.Item
              onPress={() => {
                sorting(1);
                setSort('جدیدترین');

                onClose();
              }}>
              <Text fontFamily={"B Yekan"} textAlign={"right"}>{'جدیدترین'}</Text>
            </List.Item>
            <Divider />
            <List.Item 
              onPress={() => {
                sorting(2);
                setSort('ارزان ترین');

                onClose();
              }}>
              <Text fontFamily={"B Yekan"} textAlign={"right"}>{'ارزان ترین'}</Text>
            </List.Item>
            <Divider />
            <List.Item
              onPress={() => {
                sorting(3);
                setSort(' محبوبترین');

                onClose();
              }}>
              <Text fontFamily={"B Yekan"} textAlign={"right"}>{' محبوبترین'}</Text>
            </List.Item>
          </List>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};
export default SearchPage;
