import type { IRole } from '../../api-client/models/roles/IRole';
import type { IRolesResponse } from '../../api-client/models/roles/IRolesResponse';

export interface IRoleApiClientModel {
  getRoles: (name: string, page: number, size: number, sort: string[]) => Promise<IRolesResponse>;

  createRole: (
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[]
  ) => Promise<IRole>;

  updateRole: (
    id: string,
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[]
  ) => Promise<IRole>;
}
