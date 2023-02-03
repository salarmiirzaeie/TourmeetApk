import {Box, Divider, List, NativeBaseProvider, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {DefaultHeader} from '../../components/DefaultHeader';
import List2 from '../../components/List2';
import {saveds} from '../../services/dashboardServices';

export const Settings = () => {
   
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.12}>
          <DefaultHeader name={'تنظیمات'} />
        </View>
        <List px={2}>
          <List.Item>
            <Box
              flexDirection={'row-reverse'}
              justifyContent={'space-between'}
              w={'full'}>
              <Text>شهرمن</Text>
              <Text>تبریز</Text>
            </Box>
          </List.Item>
         
          <Divider />
          <List.Item>
            <Box
              flexDirection={'row-reverse'}
              justifyContent={'space-between'}
              w={'full'}>
              <Text>شهرمن</Text>
              <Text>تبریز</Text>
            </Box>
          </List.Item>
          <Divider />
          <List.Item>
            <Box
              flexDirection={'row-reverse'}
              justifyContent={'space-between'}
              w={'full'}>
              <Text>شهرمن</Text>
              <Text>تبریز</Text>
            </Box>
          </List.Item>
          <Divider />
        </List>
      </View>
    </NativeBaseProvider>
  );
};
