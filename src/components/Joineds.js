import {
  Circle,
  NativeBaseProvider,
  Image,
  View,
  Avatar,
  Box,
} from 'native-base';
import React from 'react';

export const Joineds = ({data}) => {
  const lenth = data && data.length;
  return (
    <NativeBaseProvider>
      {data && (
        <View flexDirection={'row'}>
          {lenth >= 1 ? (
            <Avatar
              zIndex={1}
              size={'9'}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  data[0].profilephotoss[0]
                    ? data[0]?.profilephotoss[0]?.name
                    : 'defaultProfile.jpg'
                }`,
              }}
            />
          ) : (
            ''
          )}

          {lenth >= 2 ? (
            <Avatar
              zIndex={2}
              size={'9'}
              ml={-3}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  data[1].profilephotoss[0]
                    ? data[1]?.profilephotoss[0]?.name
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
              size={'9'}
              ml={-3}
              source={{
                uri: `http://192.168.43.153:3333/uploads/profilePhotos/${
                  data[2].profilephotoss[0]
                    ? data[2]?.profilephotoss[0]?.name
                    : 'defaultProfile.jpg'
                }`,
              }}
            />
          ) : (
            ''
          )}
          {lenth >= 3 && lenth !== 3 ? (
            <Circle zIndex={4} ml={-3} bg={'#24C2D8'} rounded="full" size={'9'}>
              {lenth - 3 + '+'}
            </Circle>
          ) : (
            ''
          )}
        </View>
      )}
    </NativeBaseProvider>
  );
};
