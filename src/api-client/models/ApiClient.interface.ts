// file: src/api-client/models/ApiClient.interface.ts

import { type IGlobalApiClient } from './global';
import { type IItemsApiClient } from './items';
import { type ISecurityApiClient } from './security';
import { type IViewsConfigApiClient } from './views-config';
import { type ILocalizationApiClient } from './localization';
import { type IOrganizationApiClient } from './customers/IOrganizationApiClient';
import { type IRoleApiClient } from './roles/IRoleApiClient';
import { type IContextApiClient } from './context/IContextApiClient';
import { type IUserApiClientModel } from './users/IUserApiClientModel';

/**
 * @Name IApiClient
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface IApiClient {
  global: IGlobalApiClient;
  items: IItemsApiClient;
  security: ISecurityApiClient;
  viewsConfig: IViewsConfigApiClient;
  localization: ILocalizationApiClient;
  customers: IOrganizationApiClient;
  roles: IRoleApiClient;
  context: IContextApiClient;
  users: IUserApiClientModel;
}
