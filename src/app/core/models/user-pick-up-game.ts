export interface UserPickUpGame {
  id: string;
  m_user: {
    id: string;
    nick: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  pick_up_game: {
    id: string;
    name: string;
    sports_facility: string;
    sport_type: string;
    owner: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  inviteDate: string;
  participates: boolean;
  published_at: string;
}
