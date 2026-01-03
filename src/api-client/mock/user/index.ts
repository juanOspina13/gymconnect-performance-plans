// file: src/api-client/mock/organization/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';
import { UserApiClientModel } from '../../models/users/UserApiClientModel';

// instantiate the User pointing at the url that returns static json mock data
const userApiClient = new UserApiClientModel({
  urls: appConfig.users.apiUrls,
  mockDelay: 125 // simulate a delay so we can see our loader
});

// export the instance
export { userApiClient };
