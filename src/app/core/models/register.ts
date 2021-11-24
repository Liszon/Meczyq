export class newRegister {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

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
