export interface Register {
  username: string;
  email: string;
  provider: string;
  password: string;
  resetPasswordToken: string;
  confirmationToken: string;
  confirmed: false;
  blocked: false;
  role: string;
  created_by: string;
  updated_by: string;
}
