import React, {useRef} from 'react';
import {TabBar} from 'react-native-tab-view';

const ExploreHeader = (props: any) => {
  // const isValidTabPress: any = useRef(false);

  return (
    <TabBar
      indicatorStyle={{backgroundColor: 'transparent'}}
      style={{
        height: 50,
        backgroundColor: '#24C2D8',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
      }}
      onTabPress={({route, preventDefault}) => {
        // if (isValidTabPress.current) {
          preventDefault();
        // }
      }}
    />
  );
};
export default ExploreHeader;
