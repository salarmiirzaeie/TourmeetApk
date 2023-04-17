import React, {useEffect, useRef, useState} from 'react';
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
  FlatList,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {addComment, getcomments} from '../../services/postServices';
import {Formik} from 'formik';
import {Dimensions} from 'react-native';
import {Comment} from '../../components/Comment';
const initialLayout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
const CommentsPage = ({route}) => {
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
      }
    });
  }, [status]);
  return (
    <NativeBaseProvider>
      <View flex={1}>
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
            onSubmit={(values, {resetForm}) => {
              setTimeout(async () => {
                values.post = route.params.id;
                addComment(values).then(res => {
                  if (res.status === 200) {
                    setstatus(Math.random(1));
                    resetForm();
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
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </NativeBaseProvider>
  );
};
export default CommentsPage;
