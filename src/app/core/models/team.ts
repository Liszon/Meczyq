export interface Team {
  id: string;
  name: string;
  owner: {
    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
    usersPermissionsUser: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  team_users: [{
    id: string;
    startDate: string;
    endDate: string;
    inviteDate: string;
    mUser: string;
    team: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }];
  published_at: string;
  created_at: string;
  updated_at: string;
}
