// file: src/api-client/mock/organization/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';
import { OrganizationApiClientModel } from '../../../models/organization/OrganizationApiClientModel';

// instantiate the organizationApiClient pointing at the url that returns static json mock data
const organizationApiClient = new OrganizationApiClientModel({
  urls: appConfig.customers.apiUrls,
  mockDelay: 125 // simulate a delay so we can see our loader
});

// export the instance
export { organizationApiClient };
