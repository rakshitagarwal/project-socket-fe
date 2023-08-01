import axios from "axios";
import storage from "./storage";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_BASE_PATH + "/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const JWT_TOKEN = storage.getToken();
    if (JWT_TOKEN) {
      config.headers.Authorization = `Bearer ${JSON.parse(JWT_TOKEN)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { data, status } = response;
    return { ...data, status };
  },
  (error) => {
    //TODO: add error toast message here
    if (error.message === "Network Error")
      return {
        success: false,
        message: "Network Error",
        metdata: {},
      };
    const { data, status } = error.response;
    return { ...data, status };
  }
);

export default axiosInstance;
