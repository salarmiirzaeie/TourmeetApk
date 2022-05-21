import { NativeBaseProvider, Text, View,Button,Input } from 'native-base';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { productAdd } from '../State-Management/actions/productAction'
import {login} from '../State-Management/actions/LoginAction'
export const Addtest = () => {
    const dispatch=useDispatch();
    const id=useRef();

    const title=useRef();
    const price=useRef();
const save =()=>{
    console.log(id.current.value)
    let item ={};
    item.id=id.current.value
    item.title=title.current.value
    item.price=price.current.value
    // console.log(item)
    dispatch(productAdd(item))

}
const log =()=>{
  dispatch(login())

}


  return (
    <NativeBaseProvider>
        <Text>
            Add new Product
        </Text>
        <Button onPress={()=>dispatch(log())}><Text>ddd</Text></Button>

        <View>
           <Text>Id:</Text> 
           <Input ref={id}/>
        </View>
        <View>
        <Text>title:</Text><Input ref={title}/>
        </View> 
         <View>
         <Text>price:</Text><Input ref={price}/>
        </View>
        <Button onPress={()=>save()}><Text>save</Text></Button>

    </NativeBaseProvider>
  )
}
