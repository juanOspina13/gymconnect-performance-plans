// file: src/http-client/index.ts

import { type IHttpClient } from './models/HttpClient.interface';
import { HttpClientAxios } from './models/HttpClient.axios';
import { appConfig } from '../app-config';

// export instance of IHttpClient
export const httpClient: IHttpClient = new HttpClientAxios(appConfig.httpClient);

// also export all our interfaces/models/enums
export * from './models';
