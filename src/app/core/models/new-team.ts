export class CreateNewTeam{
  name: string | undefined;
  owner: string | undefined;
}

export class PutName{
  name: string | undefined;
}

export interface NewTeam {
  name: string;
  owner: string;
  team_users: [string];
  published_at: string;
  created_by: string;
  updated_by: string;
}
