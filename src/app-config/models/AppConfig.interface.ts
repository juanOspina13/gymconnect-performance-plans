// file: src/app-config/models/AppConfig.interface.ts

import type {
  IGlobalApiClientUrls,
  ISecurityApiClientUrls,
} from "../../api-client/models";

export interface IHttpClientConfig {
  tokenKey: string;
}

/**
 * @Name IAppConfig
 * @description
 * Describes the structure of a configuration file for the app
 */
export interface IAppConfig {
  global: {
    // ... things that are not specific to a single app domain
    version: number;
    prototyping: boolean; // only for local front-end dev so we can see some additoinal dev-only views
    apiUrls: IGlobalApiClientUrls;
    production: boolean;
    api: string;
    apigeeEndpoint: string;
    namespace: string;
    authpath: string;
    userManagementPath: string;
    accessControlPath: string;
    organizationPath: string;
    assetManagementPath: string;
    orcMetadataPath: string;
    configurationPath: string;
    notificationPath: string;
    basePath: string;
  };

  httpClient: IHttpClientConfig;

  apiClient: {
    type: string;
    apikey: string;
  };

  users: {
    apiUrls: ISecurityApiClientUrls;
  };
}
