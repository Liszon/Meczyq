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
  m_user: {
    id: string;
    nick: string;
    teams: [string];
    user_teams: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  team: {
    id: string;
    name: string;
    owner: string;
    team_users: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  published_at: string;
}
