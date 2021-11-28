export class NewMatchPost {
  date: string | undefined;
  matchResult: string | undefined;
  teamTournament1: string | undefined;
  teamTournament2: string | undefined;
}

export interface NewMatch {
  date: string;
  matchResult: string;
  teamTournament1: string;
  teamTournament2: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}
