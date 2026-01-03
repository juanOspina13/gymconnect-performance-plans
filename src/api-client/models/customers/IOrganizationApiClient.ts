import type { IOrganizationAdminInviteResponse } from '../../../models/organization/IOrganizationInviteResponse';
import type { IOrganizationsResponse } from './IOrganizationsResponse';

export interface IOrganizationApiClient {
  getCustomers: (
    name: string,
    page: number,
    size: number,
    sort: string[]
  ) => Promise<IOrganizationsResponse>;

  inviteAdmin: (
    templateId: string,
    roleName: string,
    orgId: string,
    email: string
  ) => Promise<IOrganizationAdminInviteResponse>;

  getChildOrganizations: (orgId: string | undefined) => Promise<IOrganizationsResponse>;
}
