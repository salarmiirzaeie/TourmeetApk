import {
  NativeBaseProvider,
  Box,
  FlatList,
  Image,
  Pressable,
  useDisclose,
  Modal,
  Spinner,
} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export const Gallery = data => {
  const {width: windowWidth} = Dimensions.get('window');
  const {height: windowheight} = Dimensions.get('window');

  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <>
      <FlatList
        data={data.images}
        renderItem={({item}) => {
          return (
            <Pressable onPress={onOpen}>
              <Image
                alt="ll"
                source={{
                  uri: `http://192.168.43.153:3333/uploads/thumbnails/${item}`,
                }}
                style={{width: windowWidth, height: windowheight/2.5}}
              />
            </Pressable>
          );
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        backgroundColor={'black'}
        size={'full'}
        onClose={onClose}
        isOpen={isOpen}>
        <Modal.CloseButton mt={10} />

        <Modal.Content flex={0.5}>
          <FlatList
            data={data.images}
            renderItem={({item}) => {
              return (
                <Image
                  alt="ll"
                  source={{
                    uri: `http://192.168.43.153:3333/uploads/thumbnails/${item}`,
                  }}
                  style={{width: windowWidth, height: '100%'}}
                />
              );
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Modal.Content>
      </Modal>
    </>
  );
};
