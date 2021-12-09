export interface Tournament {
  id: string;
  owner: {
    id: string;
    firstName: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
    usersPermissionsUser: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  sports_facility: {
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  sport_type: {
    id: string;
    name: string;
    sport_facilities: [string];
    published_at: string;
    created_at: string;
    updated_at: string;
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
    created_at: string;
    updated_at: string;
  }];
  matches: [{
    id: string;
    date: string;
    matchResult: string;
    teamTournament1: string;
    teamTournament2: string;
    tournament: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }];
  published_at: string;
  created_at: string;
  updated_at: string;
}
