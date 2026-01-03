export const enum OrganizationType {
  solution,
  normal
}

export interface IOrganization {
  id: string;
  name: string;
  organizationType: OrganizationType;
}
