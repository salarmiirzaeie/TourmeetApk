import {useNavigation} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Modalpermiss} from '../../components/Modalpermiss';
import {getCampGallery} from '../../services/postServices';

const PermissPage = ({route}) => {
  const [images, setimages] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getCampGallery(route.params.id).then(res => {
      if (res.status === 200) {
        setimages(res.data);
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <Modalpermiss
        images={images}
        setvisible={() => navigation.goBack()}
        visiblity={true}
      />
    </NativeBaseProvider>
  );
};
export default PermissPage;
