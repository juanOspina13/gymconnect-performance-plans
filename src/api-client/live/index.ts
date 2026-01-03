// file: src/api-client/live/index.ts

import {
  type IApiClient,
  GlobalApiClientModel,
  ItemsApiClientModel,
  SecurityApiClientModel,
  ViewsConfigApiClientModel,
  LocalizationApiClientModel
} from '../models';

// import a reference to the app config
import { appConfig } from '../../app-config';
import { OrganizationApiClientModel } from '../../models/organization/OrganizationApiClientModel';
import { RoleApiClientModel } from '../../models/roles/RoleApiClientModel';
import { ContextApiClientModel } from '../../models/context/ContextApiClientModel';
import { UserApiClientModel } from '../models/users/UserApiClientModel';

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: IApiClient = {
  global: new GlobalApiClientModel({ urls: appConfig.global.apiUrls }),
  items: new ItemsApiClientModel({ urls: appConfig.items.apiUrls }),
  security: new SecurityApiClientModel({ urls: appConfig.security.apiUrls }),
  viewsConfig: new ViewsConfigApiClientModel({ urls: appConfig.viewsConfig.apiUrls }),
  localization: new LocalizationApiClientModel({ urls: appConfig.localization.apiUrls }),
  customers: new OrganizationApiClientModel({ urls: appConfig.customers.apiUrls }),
  roles: new RoleApiClientModel({ urls: appConfig.roles.apiUrls }),
  context: new ContextApiClientModel({ urls: appConfig.context.apiUrls }),
  users: new UserApiClientModel({ urls: appConfig.users.apiUrls })
};

// export our instance
export { apiLiveClient };
