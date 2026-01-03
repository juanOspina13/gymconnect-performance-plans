// base http client axios instance

import axios, { type AxiosInstance } from 'axios';
import { getConfigFile } from '../app-config';

const env = getConfigFile().global;
class BaseAPIClient {
  isRefreshingtoken = false;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${env.basePath}`,
      headers: {
        'Content-Type': 'application/json',
      },
      maxRedirects: 0
    });
  }
}

export default new BaseAPIClient();
