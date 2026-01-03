export const enum apiMethods {
  POST,
  GET,
  PUT,
  PATCH,
  DELETE
}

interface PermissionsDTO {
  id: string;
  apiPermission: string;
  apiUrl: string;
  apiMethod: apiMethods;
  description: string;
}

export interface IRole {
  id?: string;
  name: string;
  mfa: boolean;
  locationHeuristics: boolean;
  description: string;
  passwordPolicy?: string;
  permissions: Array<PermissionsDTO>;
}
