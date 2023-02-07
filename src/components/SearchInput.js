import React, {useState} from 'react';
import {Input, Circle, PresenceTransition, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';
import {CityModal} from './CityModal';

export const SearchInput = () => {
  const navigation = useNavigation();
  const [visible, setvisible] = useState(false);

  return (
    <>
      <Input
        isFocused={false}
        showSoftInputOnFocus={false}
        onFocus={() => {
          navigation.navigate('SearchPage', {
            text: 'b',
          });
        }}
        w="90%"
        h="90%"
        bg="white"
        borderColor="white"
        shadow={4}
        textAlign="center"
        variant="rounded"
        InputLeftElement={
          <Button
            onPress={() => setvisible(true)}
            p={0}
            m={0}
            h="full"
            startIcon={<Feather style={{fontSize: 18}} name="map-pin" />}
            fontFamily={'B Yekan'}
            w={'20%'}
            bg={'skyblue'}>
            تبریز
          </Button>
        }
        InputRightElement={
          <PresenceTransition
            visible={true}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 300,
              },
            }}>
            <Circle bg="skyblue" size={8}>
              <AntDesign name="search1" color="white" size={20} />
            </Circle>
          </PresenceTransition>
        }
      />

      <CityModal visible={visible} setvisible={() => setvisible(false)} />
    </>
  );
};
