export class AddUserTeam {
  inviteDate: string | undefined;
  team: string | undefined;
  mUser: string | undefined;
}

export interface UserTeam {
  id: string;
  startDate: string;
  endDate: string;
  inviteDate: string;
  mUser: {
    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
    usersPermissionsUser: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  team: {
    id: string;
    name: string;
    owner: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  created_at: string;
  updated_at: string;
}
