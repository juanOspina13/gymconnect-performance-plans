import { IOrganizationsResponse } from '../../api-client/models/customers/IOrganizationsResponse';

export interface IOrganizationApiClientModel {
  getCustomers: (
    name: string,
    page: number,
    size: number,
    sort: string[]
  ) => Promise<IOrganizationsResponse>;

  getChildOrganizations: (ordId: string | undefined) => Promise<IOrganizationsResponse>;
}
