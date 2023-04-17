import {IconButton, ScrollView, Text, View} from 'native-base';
import React from 'react';
import {Modal} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const BuyllawModal = ({showModal, setShowModal}) => {
  return (
    <Modal
      visible={showModal}
      animationType={'fade'}
      transparent
      onRequestClose={() => {
        setShowModal(false);
      }}>
      <View flex={1} justifyContent={'center'}>
        <View
          alignSelf={'center'}
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
          maxWidth="350"
          h="600">
          <IconButton
            alignSelf={'flex-end'}
            position={'absolute'}
            rounded={2}
            onPress={() => setShowModal(false)}
            icon={<Entypo style={{fontSize: 20, color: 'gray'}} name="cross" />}
          />
          <View
            w={'100%'}
            flexDirection={'row-reverse'}
            borderBottomColor={'gray.400'}
            borderBottomWidth={2}
            flex={0.08}>
            <Text
              alignSelf={'center'}
              fontSize={15}
              fontFamily={'B Yekan'}
              textAlign={'center'}>
              {'قوانین خریدتورمیت'}
            </Text>
          </View>

          <View flex={0.92} p={3}>
            <ScrollView>
              <Text
                fontFamily={'B YekanBold'}
                fontSize={20}
                textAlign={'right'}>
                سلب مسئولیت
              </Text>
              <Text fontFamily={'B Yekan'} fontSize={15} textAlign={'right'}>
                اپلیکیشن " تورمیت" هیچ گونه تعهدی نسبت به آگاهی از صحت اطلاعات
                درج شده سرپرست برنامه و اجرای آن ندارد و شرکت کننده با آگاهی از
                این امر در برنامه ها شرکت می‌نماید. مسئولیت ناشی از اتفاقات و
                حوادث برنامه، برعهده سرپرست برنامه می‌باشد و مسئولیت هر گونه
                اتفاق و حادثه در برنامه، از اپلیکشین " تورمیت" سلب می‌گردد.
              </Text>
              <Text
                fontFamily={'B YekanBold'}
                fontSize={20}
                textAlign={'right'}>
                عدم شرکت در برنامه
              </Text>
              <Text fontFamily={'B Yekan'} fontSize={15} textAlign={'right'}>
                در صورت عدم شرکت در برنامه، هیچ مبلغی از طرف وبسایت "تورمیت "
                استرداد نخواهد شد.
              </Text>
              <Text
                fontFamily={'B YekanBold'}
                fontSize={20}
                textAlign={'right'}>
                لغو برنامه{' '}
              </Text>
              <Text fontFamily={'B Yekan'} fontSize={15} textAlign={'right'}>
                مسئولیت استرداد به عهده برگزارکننده می باشد. در صورتی که به هر
                دلیلی اپلیکشین "تورمیت " موظف به استرداد وجه باشد، هزینه حداکثر
                طی ۵ روزی کاری به حساب شرکت کننده واریز خواهد شد.
              </Text>
              <Text
                fontFamily={'B YekanBold'}
                fontSize={20}
                textAlign={'right'}>
                سایر قوانین{' '}
              </Text>
              <Text fontFamily={'B Yekan'} fontSize={15} textAlign={'right'}>
                شرکت کننده صحت اطلاعاتی که در هنگام ثبت‌نام وارد میکند را تایید
                می‌نماید.
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};
