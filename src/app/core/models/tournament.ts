export interface Tournament {
  id: string;
  organizer: {
    id: string;
    nick: string;
    teams: [string];
    user_teams: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  sports_facility: {
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    sport_types: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  sport_type: {
    id: string;
    name: string;
    sport_facilities: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  name: string;
  start_date: string;
  end_date: string;
  team_tournaments: [{
    id: string;
    team: string;
    invite_data: string;
    tournament: string;
    participates: boolean;
    published_at: string;
    created_by: string;
    updated_by: string;
  }];
  published_at: string;
}
