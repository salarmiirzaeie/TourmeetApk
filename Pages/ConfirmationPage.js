import { Box, Input, NativeBaseProvider, View ,Text, Button} from 'native-base'
import React from 'react'
import { AppBar2 } from '../components/Camp/Appbar2'

export const ConfirmationPage = () => {
  return (
   <NativeBaseProvider>
      <View flex={1} bg="white">
         <AppBar2/>
         <View p={4}  flex={0.93}>
             <Text>
                 شماره موبایل خود رو وار کنید
             </Text>
             <Input mt={2}/>

         </View>
         <View flexDirection={"row"} p={3} flex={0.07} bg="gray.50">
             <Button bg={"#8F95D3"} flex={0.5}>
                 بعدی
             </Button>
         </View>

      </View>
   </NativeBaseProvider>
  )
}
