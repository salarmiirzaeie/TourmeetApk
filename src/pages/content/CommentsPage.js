import React, {useEffect, useState} from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import {UserList} from '../../components/UserList';
import {
  NativeBaseProvider,
  View,
  ScrollView,
  Text,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {getcomments} from '../../services/postServices';
import {Formik} from 'formik';
const CommentsPage = ({route}) => {
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    getcomments(route.params.id).then(res => {
      if (res.status === 200) {
        setcomments(res.data);
      }
    });
  }, []);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View flex={0.095}>
          <DefaultHeader name="نظرات" />
        </View>
        <View flex={1}>
          <ScrollView>
            <View px={2} py={1} flex={1}>
              <Box
                style={{
                  borderWidth: 1,
                  borderRadius: 4,
                  borderColor: 'lightgray',
                }}
                variant={'outline'}
                p={1}>
                <Text>s</Text>
              </Box>
            </View>
          </ScrollView>
        </View>
        <KeyboardAvoidingView
          h={{
            base: '400px',
            lg: 'auto',
          }}
          behavior={'height'}
          flexDirection={'row'}
          justifyContent={'center'}
          px={2}
          flex={0.07}>
          <Formik
            initialValues={{post: '', comment: '', user: '', reply: ''}}
            onSubmit={values => {
              setTimeout(async () => {}, 200);
            }}>
            {({
              values,

              errors,

              touched,

              handleChange,

              handleBlur,

              handleSubmit,

              isSubmitting,
            }) => (
              <>
                <Button onPress={handleSubmit} bg={'#24C2D8'}>
                  <Feather name="send" />
                </Button>
                <Input
                  w={'90%'}
                  onBlur={handleBlur('comment')}
                  onChangeText={handleChange('comment')}
                  value={values.comment}
                />
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </NativeBaseProvider>
  );
};
export default CommentsPage;
