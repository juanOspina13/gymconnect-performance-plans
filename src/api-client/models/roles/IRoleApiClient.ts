import { IRole } from './IRole';
import { IRolesResponse } from './IRolesResponse';

export interface IRoleApiClient {
  getRoles: (name: string, page: number, size: number, sort: string[]) => Promise<IRolesResponse>;

  createRole: (
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[],
    passwordPolicy: string | undefined
  ) => Promise<IRole>;

  updateRole: (
    id: string,
    name: string,
    description: string,
    mfa: boolean | undefined,
    locationHeuristics: boolean | undefined,
    apiPermissions: string[]
  ) => Promise<IRole>;

  getRole: (roleId: string) => Promise<IRole>;
}
