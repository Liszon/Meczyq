export interface TeamTournament {
  id: string;
  team: {
    id: string;
    name: string;
    owner: string;
    team_users: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  invite_date: string;
  tournament: {
    id: string;
    organizer: string;
    sports_facility: string;
    sport_type: string;
    name: string;
    start_date: string;
    end_date: string;
    team_tournaments: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  partisipates: boolean;
  published_at: string;
}
