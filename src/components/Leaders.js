import {Circle, NativeBaseProvider, Image, View, Avatar} from 'native-base';
import React from 'react';

export const Leaders = ({data}) => {
  const lenth = data && data.length;
  return (
    <NativeBaseProvider>
      {data && (
        <View flexDirection={'row'}>
          {lenth >= 1 ? (
            <Avatar
              zIndex={1}
              size={'7'}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  data[0]
                    ? data[0].profilephotoss[0].name
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
                  data[1]
                    ? data[1].profilephotoss[0].name
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
                  data[2]
                    ? data[2].profilephotoss[0].name
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
