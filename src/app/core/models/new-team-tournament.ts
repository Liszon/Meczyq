export class NewTeamTournament{
  team: {
    id: string;
  };
  invite_date: string | undefined;
  tournament: {
    id: string;
  };
  participates: boolean | undefined;

  constructor() {
    this.team = {id: ''};
    this.tournament = {id: ''};
  }
}

export interface NewTeamTournamentmodel {
  team: string;
  invite_date: string;
  tournament: string;
  participates: boolean;
  published_at: string;
  created_by: string;
  updated_by: string;
}
