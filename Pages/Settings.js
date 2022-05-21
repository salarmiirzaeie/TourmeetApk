import { Button, NativeBaseProvider, View } from 'native-base'
import React from 'react'
import {LogOut,login} from '../assets/State-Management/actions/LoginAction'
import { useDispatch } from 'react-redux'

export const Settings = () => {
    const dispatch=useDispatch();

  return (
      <NativeBaseProvider>
          <View p={10}>
          <Button onPress={()=> dispatch(LogOut())}>logout</Button>

          <Button onPress={()=> dispatch(login())}>logIn</Button>

          </View>
      </NativeBaseProvider>
  )
}
