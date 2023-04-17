<<<<<<< HEAD
import React, {useEffect, useRef, useState} from 'react';
=======
import React, {useEffect, useState} from 'react';
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
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
<<<<<<< HEAD
  FlatList,
=======
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {addComment, getcomments} from '../../services/postServices';
import {Formik} from 'formik';
<<<<<<< HEAD
import {Dimensions} from 'react-native';
import {Comment} from '../../components/Comment';
=======
import { Dimensions } from 'react-native';
import { Comment } from '../../components/Comment';
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const CommentsPage = ({route}) => {
<<<<<<< HEAD
  const scroll = useRef();
  const [comments, setcomments] = useState([]);
  const [status, setstatus] = useState(0);
  const [access, setaccess] = useState(false);
  const [loadinf, setloading] = useState(false);
  useEffect(() => {
    getcomments(route.params.id).then(res => {
      if (res.status === 200) {
        setcomments(res.data.comments);
        scroll.current.scrollToEnd({animated: true});

        setaccess(res.data.accesswrite);
        setloading(true);
=======

  const [comments, setcomments] = useState([]);
  const [status, setstatus] = useState(0);
  useEffect(() => {
    getcomments(route.params.id).then(res => {
      if (res.status === 200) {
        setcomments(res.data);
        console.log(res.data)
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
      }
    });
  }, [status]);
  return (
    <NativeBaseProvider>
      <View flex={1}>
<<<<<<< HEAD
        <View h={initialLayout.height / 12}>
          <DefaultHeader name="نظرات" />
        </View>
        <View py={1} flex={1}>
          <ScrollView
            onContentSizeChange={() => {
              scroll.current.scrollToEnd({animated: true});
            }}
            ref={scroll}
            px={2}>
            {comments.map(item => (
              <Comment key={item._id} cm={item} />
=======
        <View h={initialLayout.height/12}>
          <DefaultHeader name="نظرات" />
        </View>
        <View flex={1}>
          <ScrollView px={2} py={1}>
            {comments.map(item => (
             <Comment key={item._id} cm={item} />
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
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
<<<<<<< HEAD
            onSubmit={(values, {resetForm}) => {
=======
            onSubmit={values => {
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
              setTimeout(async () => {
                values.post = route.params.id;
                addComment(values).then(res => {
                  if (res.status === 200) {
                    setstatus(Math.random(1));
<<<<<<< HEAD
                    resetForm();
=======
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
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
<<<<<<< HEAD
              resetForm,
            }) => (
              <View flex={1} px={1} flexDirection={'row'}>
                <Button
                  isLoading={!loadinf}
                  disabled={!access}
                  onPress={() => {
                    handleSubmit();
                    setloading(false);
                  }}
                  bg={'#24C2D8'}>
                  <Feather style={{fontSize: 20}} name="send" />
                </Button>
                <Input
                  flex={1}
                  bg={'white'}
                  isDisabled={!access}
                  onFocus={() => {
                    scroll.current.scrollToEnd({animated: true});
                  }}
                  onBlur={() => {
                    handleBlur('comment');
                  }}
                  onChangeText={handleChange('comment')}
                  value={values.comment}
                />
              </View>
=======
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
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </NativeBaseProvider>
  );
};
export default CommentsPage;
