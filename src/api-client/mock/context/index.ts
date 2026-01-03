// file: src/api-client/mock/organization/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';
import { ContextApiClientModel } from '../../../models/context/ContextApiClientModel';

// instantiate the Context pointing at the url that returns static json mock data
const contextApiClient = new ContextApiClientModel({
  urls: appConfig.context.apiUrls,
  mockDelay: 125 // simulate a delay so we can see our loader
});

// export the instance
export { contextApiClient };
