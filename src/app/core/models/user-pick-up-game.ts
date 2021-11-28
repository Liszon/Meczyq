export class AddUserPickUpGame {
  m_user: string | undefined;
  pick_up_game: string | undefined;
  inviteDate: string | undefined;
  participates: boolean | undefined;
}

export interface UserPickUpGame {
  id: string;
  m_user: {
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
  pick_up_game: {
    id: string;
    name: string;
    sports_facility: string;
    sport_type: string;
    owner: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  inviteDate: string;
  participates: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}
