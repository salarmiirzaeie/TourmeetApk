import { Box, NativeBaseProvider, ScrollView, View } from 'native-base'
import React from 'react'

export const Profile = () => {
  return (
    <NativeBaseProvider>
      <View flex={1} bg={"danger.100"}>
        <ScrollView>
          <View bg={"trueGray.100"} h={300}></View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}
