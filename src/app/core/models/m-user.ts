export interface MUser {
  id: string;
  nick: string;
  published_at: string;
}

export interface MuserFull {
  id: string;
  Name: string;
  secondName: string;
  lastName: string;
  phoneNumber: string;
  usersPermissionsUser: {
    id: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: string;
    created_at: string;
    updated_at: string;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
  teams: [{
    id:string;
    name: string;
    owner: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }];
  user_teams: [{
    id: string;
    startDate: string;
    endDate: string;
    inviteDate: string;
    team: string;
    mUser: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }];
}
