export interface NewUsersPermissionRole {
  name: string;
  description: string;
  type: string;
  permissions: [string];
  users: [string];
  created_by: string;
  updated_by: string;
}
