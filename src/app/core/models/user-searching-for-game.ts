export interface UserSearchingForGame {
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
  sports_facilities: [{
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    published_at: string;
    created_at: string;
    updated_at: string;
  }]
  sport_type: {
    id: string;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  published_at: string;
  created_at: string;
  updated_at: string;
}
