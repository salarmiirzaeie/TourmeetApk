import axios from 'axios';
import {Store} from '../../store';
const apiPort = 'http://192.168.43.153:3333/';
let city = Store.getState().cityState;

export const getIndex = () => {
  const res = axios
    .get(`${apiPort}`)
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
export const getPopularCamps = () => {
  const res = axios
    .get(`${apiPort}getPopularCamps`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getPopularTours = () => {
  const res = axios
    .get(`${apiPort}getPopularTours`)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const searchTour = data => {
  const res = axios
    .post(`${apiPort}searchtour`, data)
    .then(response => {
      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getPost = data => {
  // console.log(data)
  const res = axios
    .get(`${apiPort}post/${data}`)
    .then(response => {
      // console.log(response.data)

      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
export const getUser = data => {
  // console.log(data)
  const res = axios
    .get(`${apiPort}user/${data}`)
    .then(response => {
      // console.log(response.data)

      return response;
    })
    .catch(err => {
      return err.response;
    });
  return res;
};
