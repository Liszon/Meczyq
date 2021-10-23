export interface NewUsersPermissionUser {
  username: string;
  email: string;
  provider: string;
  password: string;
  resetPasswordToken: string;
  confirmationToken: string;
  confirmed: boolean;
  blocked: boolean;
  role: string;
  created_by: string;
  updated_ny: string;
}
