import { BASE_URL } from '@shared/constants';
import { axiosInstance } from './axios.instance';

export class BaseApi {
  httpClient;
  baseUrl = BASE_URL;

  constructor() {
    this.httpClient = axiosInstance;
  }

  url(path: string) {
    return `${this.baseUrl}${path}`;
  }
}
