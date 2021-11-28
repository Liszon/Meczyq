export interface TeamTournament {
  id: string;
  team: {
    id: string;
    name: string;
    owner: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  invite_date: string;
  tournament: {
    id: string;
    owner: string;
    sports_facility: string;
    sport_type: string;
    name: string;
    start_date: string;
    end_date: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  partisipates: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}
