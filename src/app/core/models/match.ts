export interface Match {
  id: string;
  date: string;
  matchResult: {
    id: string;
    result: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  teamTournament1: {
    id: string;
    team: string;
    invite_date: string;
    tournament: string;
    participates: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  teamTournament2: {
    id: string;
    team: string;
    invite_date: string;
    tournament: string;
    participates: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
}
