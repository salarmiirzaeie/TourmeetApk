import { View, Image, Text, FlatList, NativeBaseProvider, Box, Pressable, Button, IconButton ,Modal,useDisclose} from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from "react-native"
import { AppBar } from '../Camp/AppBar';
import { TabViev } from './TabViev';
const { width: windowWidth } = Dimensions.get("window");
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import axios from 'axios'

const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
       
    };
});

function Slide({ data }) {
      /* 2. Get the param */
    return (

        <Image
        
            alt='ll'
            source={{ uri: data.image }}
            style={{ width: windowWidth, height: "100%" }}
        />


    );
}
export const Tourdet3 = ({navgation,route}) => {
    const {
        isOpen,
        onOpen,onClose
      } = useDisclose();
    const [ff, setff] = useState([0.44, 0.5,false])
    const move=(i)=>{
        if(i==1){
            setff([0.1,0.84,true])

        }
        if(i==0){
            setff([0.44,0.5,false])
 
        }

    }

    const  Id  = route.params;
    console.log(Id)
    const data={"id": 0,
    "title": "string",
    "description": "string",
    "bannerUrl": "string",
    "duration": "2022-05-22T14:39:37.585Z",
    "price": 0,
    "capacity": 0,
    "approvalStatus": {}}
    React.useEffect(() => {
        getdetails();
      }, []);
    const getdetails = () => {
    axios.post('http://192.168.43.153:3333/api/tour/find', data)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}
    return (
        <NativeBaseProvider>
            <AppBar />
            
            <View flex={1} flexDirection="column">
                {/* {ff[2]?<View bg="#8F95D3" flex={ff[0]}></View>: */}
                  <View  flex={ff[0]}>
                    
                  <FlatList
                  
                      data={slideList}
                      renderItem={({ item }) => {
                          return (<Pressable onPress={onOpen}>
                        <Slide data={item} />
                          </Pressable>);
                      }}
                      pagingEnabled
                      horizontal
                      showsHorizontalScrollIndicator={false}
                  />

              </View>
                {/* } */}
              

                <View mt={-3.5} zIndex={12} borderTopRadius={30} flex={ff[1]} bg="white">
                    <View  pl={7}flex={0.01} alignItems="center" zIndex={999} pr={7}>
                    {/* <Box bg="white" shadow={4} rounded={"md"} mt={-7} size={10}>
                        
                        <IconButton
                        mt={2}
                    h={1}
                    onPress={()=>{move(0)}}

                        _icon={{
                            as: AntDesign,
                            name: "heart",
                            color: "red.500",
                             size: 7,
                            width:30
                        }}
                    /></Box> */}
                    <Box shadow={5} bg="white" mt={-6} rounded={"full"} size={10}> 
                    
                    {ff[2]==true?<IconButton
                  
                  rounded={"full"}
                    onPress={()=>{move(0)}}

                        _icon={{
                            as: AntDesign,
                            name: "down",
                            color: "gray.300",
                             size: 5,
                          
                             
                        }}
                    />:

                    <IconButton  rounded={"full"}
                    onPress={()=>{move(1)}}
                 
                        _icon={{
                            as: AntDesign,
                            name: "up",
                            color: "gray.300",
                        size: 5,
                           
                        }}
                    />

                    }
                    </Box>

                    </View>
                    {/* {ff[2]==true?<IconButton
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
                     */}
                   
                    <TabViev/>
                </View>
                <View pl={2} bg="white" justifyContent="space-between" flexDirection="row" pr={2} flex={0.06}>
                <Box bg="white" flex={0.14} shadow={4} rounded={"md"} >
                        
                        <IconButton
                       

                        _icon={{
                            as: AntDesign,
                            name: "heart",
                            color: "red.500",
                             size: 7,
                        }}
                    /></Box> 
                    <Button borderRadius={10} flex={0.85} bg="#8F95D3" h="full">پیوستن</Button>
                </View>

            </View>
<Modal backgroundColor={"black"} size={"full"} onClose={onClose} isOpen={isOpen}>
<Modal.CloseButton/>

    <Modal.Content flex={0.5}>
    <FlatList
                  
                  data={slideList}
                  renderItem={({ item }) => {
                      return (<Pressable onPress={()=>console.log("far")}>
                    <Slide data={item} />
                      </Pressable>);
                  }}
                  pagingEnabled
                  horizontal
                  showsHorizontalScrollIndicator={false}
              />  
              
                </Modal.Content>


                <Modal.Footer display={"none"}></Modal.Footer>
</Modal>
        </NativeBaseProvider>

    );
}

