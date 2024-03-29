import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Store} from '../../store';
const apiPort = 'http://192.168.43.153:3333/';
const gettoken = async () => {
  let token = await AsyncStorage.getItem('@storage_Key');
  return token;
};
const getCity = async () => {
  let city = await Store.getState().cityState.id;

  return city;
};
export const paymony = async data => {
  const res = axios
    .post(`${apiPort}paymony`, data, {
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
<<<<<<< HEAD
export const commented = async () => {
  console.log('first');
  const res = axios
    .get(`${apiPort}commented`, {
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
=======
>>>>>>> 2aee018f1505ba5abba3792633fcd372345b679f
export const getIndex = async () => {
  const res = axios
    .get(`${apiPort}getall/${await getCity()}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getCampTours = data => {
  const res = axios
    .get(`${apiPort}getCampTours/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getCampGallery = data => {
  const res = axios
    .get(`${apiPort}getCampGallery/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getRelatedTours = async data => {
  const res = axios
    .post(`${apiPort}relatedTours/${await getCity()}`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

export const getPopularCamps = async () => {
  const res = axios
    .get(`${apiPort}getPopularCamps/${await getCity()}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getPopularTours = async () => {
  const res = await axios
    .get(`${apiPort}getPopularTours/${await getCity()}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};

export const addComment = async data => {
  const res = axios
    .post(`${apiPort}addcm`, data, {
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
export const getPost = data => {
  const res = axios
    .get(`${apiPort}post/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getpostjoineds = data => {
  const res = axios
    .get(`${apiPort}joinedusers/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getTourLeaders = data => {
  const res = axios
    .get(`${apiPort}getcampleaders/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getUser = data => {
  const res = axios
    .get(`${apiPort}user/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getcities = data => {
  const res = axios
    .get(`${apiPort}cities/${data}`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getprovinces = () => {
  const res = axios
    .get(`${apiPort}provinces`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getcomments = async data => {
  const res = axios
    .get(`${apiPort}postcomments/${data}`, {
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
