export interface Match {
  id: string;
  date: string;
  matchResult: {
    id: string;
    result: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  teamTournament1: {
    id: string;
    team: string;
    invite_date: string;
    tournament: string;
    participates: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  teamTournament2: {
    id: string;
    team: string;
    invite_date: string;
    tournament: string;
    participates: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  published_at: string;
}
