import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const apiPort = 'https://api.tourmeet.ir/dashboard';

const gettoken = async () => {
  let token = await AsyncStorage.getItem('@storage_Key');
  return token;
};
export const joinTour = async data => {
  const res = await axios
    .put(`${apiPort}/join-tour`, data, {
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
export const unjoinTour = async data => {
  const res = axios
    .put(`${apiPort}/unjoin-tour`, data, {
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
export const saveTour = async data => {
  const res = axios
    .put(`${apiPort}/save-tour`, data, {
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
export const unSaveTour = async data => {
  const res = axios
    .put(`${apiPort}/unsave-tour`, data, {
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
export const saveds = async () => {
  const res = axios
    .get(`${apiPort}/saveds`, {
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
export const checkversion = async data => {
  console.log(data)
  const res = axios
    .get(`${apiPort}/checkVersion/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const joineds = async () => {
  const res = axios
    .get(`${apiPort}/joineds`, {
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

export const isSaved = async data => {
  const res = axios
    .post(`${apiPort}/is-saved`, data, {
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
export const isJoined = async data => {
  const res = axios
    .post(`${apiPort}/is-joined`, data, {
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
