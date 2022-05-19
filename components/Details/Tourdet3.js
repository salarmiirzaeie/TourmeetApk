import { View, Image, Text, FlatList, NativeBaseProvider, Box, Center, Button, IconButton } from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from "react-native"
import { AppBar } from '../Camp/AppBar';
import { TabViev } from './TabViev';
const { width: windowWidth } = Dimensions.get("window");
import  AntDesign  from 'react-native-vector-icons/AntDesign';

const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
       
    };
});

function Slide({ data }) {
    return (

        <Image
            alt='ll'
            source={{ uri: data.image }}
            style={{ width: windowWidth, height: "100%" }}
        />


    );
}
export const Tourdet3 = () => {
    const [ff, setff] = useState([0.45, 0.5,false])
    const move=(i)=>{
        if(i==1){
            setff([0.1,0.85,true])

        }
        if(i==0){
            setff([0.45,0.5,false])
 
        }

    }
    return (
        <NativeBaseProvider>
            <AppBar />
            
            <View flex={1} flexDirection="column">
                
                <View flex={ff[0]}>
                    
                    <FlatList
                        data={slideList}
                        renderItem={({ item }) => {
                            return <Slide data={item} />;
                        }}
                        pagingEnabled
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                </View>

                <View mt={-4} borderTopRadius={30} flex={ff[1]} bg="white">
                    {ff[2]==true?<IconButton
                    h={1}
                    onPress={()=>{move(0)}}

                        _icon={{
                            as: AntDesign,
                            name: "down",
                            color: "gray.300",
                             size: 3,
                            width:30
                        }}
                    />:

                    <IconButton h={1}
                    onPress={()=>{move(1)}}

                        _icon={{
                            as: AntDesign,
                            name: "up",
                            color: "gray.300",
                        size: 3,
                            width:30
                        }}
                    />

                    }
                    
                   
                    <TabViev/>
                </View>
                <View pl={2} pr={2} flex={0.06}>
                    <Button borderRadius={10} bg="#8F95D3" h="full">پیوستن</Button>
                </View>

            </View>

        </NativeBaseProvider>

    );
}

