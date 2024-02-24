import { axiosInstance } from './axios.instance';

export class BaseApi {
  httpClient;

  constructor() {
    this.httpClient = axiosInstance;
  }
}
