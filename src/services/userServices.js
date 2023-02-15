import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const apiPort = 'http://192.168.43.153:3333/users';
const gettoken = async () => {
  let token = await AsyncStorage.getItem('@storage_Key');
  return token;
};
export const login = data => {
  const res = axios
    .post(`${apiPort}/login`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const register = data => {
  const res = axios
    .post(`${apiPort}/register`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const resetPassword =async data => {
  const res = axios
    .post(`${apiPort}/reset-password/${await gettoken()}`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

export const editProfile =async data => {
  const res = axios
    .post(`${apiPort}/edit-profile`, data, {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const userProfile = async () => {

  const res = axios
    .get(`${apiPort}/profile`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const uploadprofilephoto = async data => {
  const res = await axios
    .post(`${apiPort}/uploadphoto`, data, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
        'content-type': 'multipart/form-data',
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const deleteprofile = async data => {
  const res = await axios
    .delete(`${apiPort}/deleteProfile/${data}`, {
      headers: {
        Authorization: `Bearer ${await gettoken()}`,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
