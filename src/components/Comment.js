import {View, Text, Box} from 'native-base';
import React from 'react';

export const Comment = ({cm}) => {

  return (
    <Box
      style={{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray',
      }}
      variant={'outline'}
      p={1}>
      <Text>{cm.comment}</Text>
      <Text>{cm.createdAt}</Text>
    </Box>
  );
};
