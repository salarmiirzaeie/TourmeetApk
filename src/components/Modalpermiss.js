import {
  
  FlatList,
  Image,
 
  View,
  
} from 'native-base';
import React from 'react';
import {Dimensions, Modal } from 'react-native' 

export const Modalpermiss = ({images, visiblity, setvisible}) => {
  const {width: windowWidth} = Dimensions.get('window');
  return (
    <>
      <Modal
        visible={visiblity}
        animationType={'fade'}
        onRequestClose={() => setvisible(false)}>
        <View bg="black" justifyContent="center" flex={1}>
          <View alignSelf={'center'} flex={0.5} bg={'blue.300'}>
            <FlatList
              data={images}
              renderItem={({item}) => {
                return (
                  <>
                    <Image
                      fallbackSource={{
                        uri: `http://192.168.43.153:3333/uploads/sea.jpg`,
                      }}
                      alt="ll"
                      source={{
                        uri: `http://192.168.43.153:3333/uploads/permissions/${item.name}`,
                      }}
                      style={{width: windowWidth, height: '100%'}}
                    />
                  </>
                );
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
