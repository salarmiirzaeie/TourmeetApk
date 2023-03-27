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
import {addComment, getcomments} from '../../services/postServices';
import {Formik} from 'formik';
import { Dimensions } from 'react-native';
import { Comment } from '../../components/Comment';
const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const CommentsPage = ({route}) => {

  const [comments, setcomments] = useState([]);
  const [status, setstatus] = useState(0);
  useEffect(() => {
    getcomments(route.params.id).then(res => {
      if (res.status === 200) {
        setcomments(res.data);
        console.log(res.data)
      }
    });
  }, [status]);
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <View h={initialLayout.height/12}>
          <DefaultHeader name="نظرات" />
        </View>
        <View flex={1}>
          <ScrollView px={2} py={1}>
            {comments.map(item => (
             <Comment key={item._id} cm={item} />
            ))}
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
            initialValues={{post: '', comment: '', reply: ''}}
            onSubmit={values => {
              setTimeout(async () => {
                values.post = route.params.id;
                addComment(values).then(res => {
                  if (res.status === 200) {
                    setstatus(Math.random(1));
                  }
                });
              }, 200);
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
