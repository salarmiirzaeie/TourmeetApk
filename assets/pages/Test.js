import { NativeBaseProvider,Box ,Text, View} from 'native-base'
import React from 'react'
import { useSelector } from 'react-redux'
import { Addtest } from './Addtest'
export const Test = () => {
    const products=useSelector(store=>store.productState)
    const logied=useSelector(store=>store.loginState)
    console.log(logied)

  return (
   <NativeBaseProvider>
   <Text>product</Text>
      <View p={10}>
      {/* {products.map(item=>
                <Box key={item.id}>{item.title}-{item.price}</Box>)}
        */}
      <Text>{logied}</Text>

      </View>
      <Addtest/>
   </NativeBaseProvider>
     
    
  )
}
