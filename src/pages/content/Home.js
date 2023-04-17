import {
  Center,
  NativeBaseProvider,
  View,
  Text,
  Divider,
  ScrollView,
  Pressable,
  Actionsheet,
  Button,
} from 'native-base';

import React, {useEffect, useRef, useState} from 'react';
import HomeHeader from '../../components/HomeHeader';
import {SearchInput} from '../../components/SearchInput';
import {PopularTours} from '../../components/PopularTours';
import {PopularCompanies} from '../../components/PopularCompanies';
import HomeCategory from '../../components/HomeCategory';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {checkversion} from '../../services/dashboardServices';
import {Linking} from 'react-native';
<<<<<<< HEAD
import {commented} from '../../services/postServices';
=======
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f

export const Home = ({route}) => {
  const scroll = useRef(null);
  const navigation = useNavigation();


  const [cit, setcit] = useState(false);
  useEffect(() => {
    checkversion(1).then(res => {
      if (res.status === 200) {
        setcit(res.data);
      }
    });
    console.log("first")

    // commented().then(res => {
    //   console.log(res.data);
    // });
  }, [route]);
  return (
    <NativeBaseProvider>
      <View bg="#24C2D8" flex={1}>
        <HomeHeader
          toTop={() => {
            scroll.current.scrollTo({y: 0, animated: true});
          }}
        />
        <ScrollView ref={scroll}>
          <View h={780}>
            <View py={8} flex={0.06}>
              <Center>
                <SearchInput />
              </Center>
            </View>
            <View
              bg="#F8F8F8"
              p={3}
              mt={0}
              borderTopRadius={25}
              shadow={3}
              flex={1}>
              <View h={250}>
                <HomeCategory />
              </View>
              <View
                px={1}
                w={'full'}
                justifyContent={'space-between'}
                mt={2}
                flexDirection="row-reverse">
                <Text fontSize={'md'} fontFamily={'B YekanBold'}>
                  محبوب ترین تورها
                </Text>
                <Pressable
                  onPress={() => navigation.navigate('PopularToursPage')}>
                  <Text
                    fontSize={'sm'}
                    color={'gray.400'}
                    fontFamily={'B Yekan'}>
                    مشاهده همه
                  </Text>
                </Pressable>
              </View>

              <View h={250} mt={0}>
                <PopularTours />
              </View>
              <View
                px={1}
                w={'full'}
                justifyContent={'space-between'}
                mt={3}
                flexDirection="row-reverse">
                <Text fontSize={'md'} fontFamily={'B YekanBold'}>
                  محبوب ترین گروه ها
                </Text>
              </View>

              <View borderRadius={'md'} mt={3} h={70}>
                <PopularCompanies />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Actionsheet isOpen={cit} hideDragIndicator disableOverlay>
        <Actionsheet.Content px={5} justifyContent={'space-evenly'} h={250}>
          <Text fontSize={20} fontFamily={'B YekanBold'}>
            به روزرسانی ضروری
            <MaterialIcons size={25} name="system-update" />
          </Text>
          <Divider />
          <Text fontFamily={'B Yekan'} fontSize={15}>
            دوست خوبم،به روز رسانی به این نسخه ضروری هست.بعد به روزرسانی ،دوباره
            میتونی از همه ی امکانات تورمیت استفاده کنی.
          </Text>
          <Button
            onPress={() => {
              Linking.openURL('https://cafebazaar.ir/app/com.Tourmeet');
            }}
            w={'full'}
            bg="#24C2D8"
            fontFamily={'B Yekan'}>
            به روزرسانی
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
};
