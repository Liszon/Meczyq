export interface Team {
  id: string;
  name: string;
  owner: {
    id: string;
    Name: string;
    teams: [string];
    user_teams: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  team_users: [{
    id: string;
    startDate: string;
    endDate: string;
    inviteDate: string;
    mUser: string;
    team: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  }];
  published_at: string;
}
