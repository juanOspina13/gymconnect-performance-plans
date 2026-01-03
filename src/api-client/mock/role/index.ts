// file: src/api-client/mock/organization/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';
import { RoleApiClientModel } from '../../../models/roles/RoleApiClientModel';

// instantiate the role pointing at the url that returns static json mock data
const roleApiClient = new RoleApiClientModel({
  urls: appConfig.roles.apiUrls,
  mockDelay: 125 // simulate a delay so we can see our loader
});

// export the instance
export { roleApiClient };
