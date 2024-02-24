import axios, { AxiosRequestConfig } from 'axios';
import { axiosConfig } from './axios.config';

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // error handling logic

      return error;
    },
  );

  return axiosInstance;
};

export const axiosInstance = createAxiosInstance(axiosConfig);
