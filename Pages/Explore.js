import React from "react";
import axios from 'axios'

import List  from "../components/Explore/List";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NativeBaseProvider} from "native-base";
const Tab = createMaterialTopTabNavigator();

export const Explore = () => {
  const [dataa, setdata] = React.useState([]);

  React.useEffect(() => {
    getTours();
  }, []);
  const getTours = () => {

    axios.get(`http://192.168.43.153:3333/api/tour/list`)
    .then(res => {
      const data = res.data;
      setdata(data);
    
    })

  };
    return (
      <NativeBaseProvider>
      <Tab.Navigator  screenOptions={{
           
            tabBarActiveTintColor: "white",
            
            tabBarStyle:{
              backgroundColor:"#8F95D3",
              borderBottomEndRadius:30,
              borderBottomLeftRadius:30,
              
              
            },
            tabBarIndicatorStyle:{
              
              backgroundColor:"transparent"
            },
            
         
          }}>
             <Tab.Screen  name="ujhgn" children={()=><List datas={dataa}/>} />
          <Tab.Screen name="nhnh" children={()=><List />} />
      
           <Tab.Screen name="ngngfhnf" children={()=><List />}  />
        </Tab.Navigator>
    </NativeBaseProvider>
  );
};
