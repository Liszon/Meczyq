export interface PickUpGame {
  id: string;
  name: string;
  sports_facility: {
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    sport_types: [string];
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  sport_type: {
    id: string;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
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
  }
  user_pick_up_games: [{
    id: string;
    m_user: string;
    pick_up_game: string;
    inviteDate: string;
    participates: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }]
  published_at: string;
  created_at: string;
  updated_at: string;
}
