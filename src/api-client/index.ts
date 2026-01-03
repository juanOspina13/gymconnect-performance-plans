// file: src/api-client/index.ts

import { IApiClient } from './models';
import { apiMockClient } from './mock';
import { apiLiveClient } from './live';

import { appConfig } from '../app-config';
// eslint-disable-next-line no-console
console.log(`config-portal: config.apiClient.type "${appConfig.apiClient.type}"`);

// return either the live or the mock client
let apiClient: IApiClient;
if (appConfig.apiClient.type === 'live') {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export { apiClient };
export * from './models';
