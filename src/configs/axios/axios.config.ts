import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@shared/constants';

export const axiosConfig: AxiosRequestConfig = {
  timeout: 10 * 60 * 1000,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
