import axios from 'axios';
import { getToken } from './Utils';



const axiosInstance = axios.create({
  // TODO: Restore below code when in production
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/v1`,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const JWT_TOKEN = getToken();

    if (JWT_TOKEN) {
      config.headers.Authorization = `Bearer ${JWT_TOKEN}`;
    }
    // TODO: Do something with config and add jwt if availabe;
    return config;
  },
  (err) => {
    // do something with error
    return Promise.reject(err);
  }
);

// Note:- returned data is strickly based on schemas of the backend
axiosInstance.interceptors.response.use(
  (res) => {
    // do something with response
    const { data, status } = res;
    return { ...data, status };
  },
  (err) => {
    // do something with error
    if (err.message === 'Network Error')
      return {
        success: false,
        message: 'Network Error',
        metdata: {},
      };
      
    const { data, status } = err.response;
    return { ...data, status };
  }
);

export default axiosInstance;
