// file: src/api-client/mock/views-config/index.ts

// import a reference to the app config
import { appConfig } from '../../../app-config';

import { IViewsConfigApiClient, ViewsConfigApiClientModel } from '../../models';

// instantiate the ViewsConfigApiClient pointing at the url that returns static json mock data
const viewsConfigApiClient: IViewsConfigApiClient = new ViewsConfigApiClientModel({
  urls: appConfig.viewsConfig.apiUrls,
  mockDelay: 500 // simulate a delay so we can see our loader
});

// export our instance
export { viewsConfigApiClient };
