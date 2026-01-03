// file: src/api-client/mock/global/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';

import { type IGlobalApiClient, GlobalApiClientModel } from '../../models';

// instantiate the GlobalApiClient pointing at the url that returns static json mock data
const globalApiClient: IGlobalApiClient = new GlobalApiClientModel({
  urls: appConfig.global.apiUrls,
  mockDelay: 500 // simulate a delay so we can see our loader
});

// export our instance
export { globalApiClient };
