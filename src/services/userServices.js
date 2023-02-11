import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Store } from '../../store';
const apiPort = 'http://192.168.43.153:3333/users';
const token = AsyncStorage.getItem('@storage_Key');
const token1 = Store.getState()
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
export const resetPassword = data => {
  const res = axios
    .post(`${apiPort}/reset-password/${token._j}`, data, {
      headers: {
        Authorization: `Bearer ${token._j}`,
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

export const editProfile = data => {
  const res = axios
    .post(`${apiPort}/edit-profile`, data, {
      headers: {
        // 'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token._j}`,
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
export const userProfile = () => {
  // console.log(token._j)
  // console.log(token1)
  const res = axios
    .get(`${apiPort}/profile`, {
      headers: {
        Authorization: `Bearer ${token._j}`,
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
        Authorization: `Bearer ${token._j}`,
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
        Authorization: `Bearer ${token._j}`,
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
