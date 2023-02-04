import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const apiPort = 'http://192.168.43.153:3333/users';
let token = AsyncStorage.getItem('@storage_Key');

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
