import {Circle, NativeBaseProvider, Image, View, Avatar} from 'native-base';
import React, { useEffect, useState } from 'react';
import { getTourLeaders } from '../services/postServices';

export const Leaders = ({data}) => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    console.log(data)
    getTourLeaders(data).then(res => {
      if (res.status === 200) {
        setusers(res.data);
        console.log(res.data)
      }
    });
  }, []);
  const lenth = users && users.length;
  return (
    <NativeBaseProvider>
      {users && (
        <View flexDirection={'row'}>
          {lenth >= 1 ? (
            <Avatar
              zIndex={1}
              size={'7'}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  users[0].profilephotoss[0]
                    ? users[0].profilephotoss[0].name
                    : 'defaultProfile1.jpg'
                }`,
              }}
            />
          ) : (
            ''
          )}

          {lenth >= 2 ? (
            <Avatar
              zIndex={2}
              size={'7'}
              ml={-3}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  users[1].profilephotoss[0]
                    ? users[1].profilephotoss[0].name
                    : 'defaultProfile.jpg'
                }`,
              }}
            />
          ) : (
            ''
          )}
          {lenth >= 3 ? (
            <Avatar
              zIndex={3}
              size={'7'}
              ml={-3}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  users[2].profilephotoss[0]
                    ? users[2].profilephotoss[0].name
                    : 'defaultProfile.jpg'
                }`,
              }}
            />
          ) : (
            ''
          )}
          {lenth >= 1 ? (
            <Circle zIndex={4} ml={-3} bg={'#24C2D8'} rounded="full" size={'7'}>
              {lenth + '+'}
            </Circle>
          ) : (
            ''
          )}
        </View>
      )}
    </NativeBaseProvider>
  );
};
