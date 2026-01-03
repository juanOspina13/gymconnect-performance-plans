export interface IOrganizationAdminInviteResponse {
  userId: string;
  template: string;
  email: string;
  mobilePhone: string;
  roleName: string;
  orgId: string;
  expirationDate: string;
  firstName: string;
  lastName: string;
  // status: 	enum;
  // name 	:HumanNameDTO;
  // extendedObjects 	ExtendedObjectDTO[]
  //practitioner 	PractitionerDTO[]
}
