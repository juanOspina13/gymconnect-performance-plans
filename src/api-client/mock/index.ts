// file: src/api-client/mock/index.ts

import type { IApiClient } from '../models';

import { globalApiClient } from './global';
import { itemsApiClient } from './items';
import { securityApiClient } from './security';
import { viewsConfigApiClient } from './views-config';
import { localizationApiClient } from './localization';
import { organizationApiClient } from './organization';
import { roleApiClient } from './role';
import { contextApiClient } from './context';
import { userApiClient } from './user';

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: IApiClient = {
  global: globalApiClient,
  items: itemsApiClient,
  security: securityApiClient,
  viewsConfig: viewsConfigApiClient,
  localization: localizationApiClient,
  customers: organizationApiClient,
  roles: roleApiClient,
  context: contextApiClient,
  users: userApiClient
};

// export our instance
export { apiMockClient };
