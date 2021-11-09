export interface NewTournament {
  organizer: string;
  sport_facility: string;
  sport_type: string;
  name: string;
  start_date: string;
  end_date: string;
  team_tournaments: [string];
  published_at: string;
  created_by: string;
  updated_by: string;
}
