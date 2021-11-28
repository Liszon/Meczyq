export interface UsersPermissionUser {
  id: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: {
    id: string;
    name: string;
    description: string;
    type: string;
  };
}
