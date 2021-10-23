export interface UsersPermissionRole {
  id: string;
  name: string;
  description: string;
  type: string;
  permissions: [{
    id: string;
    type: string;
    controller: string;
    action: string;
    enabled: boolean;
    policy: string;
    role: string;
    created_by: string;
    updated_by: string;
  }];
  users: [{
    id: string;
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: boolean;
    confirmed: boolean;
    blocked: boolean;
    role: string;
    created_by: string;
    updated_by: string;
  }];
}
