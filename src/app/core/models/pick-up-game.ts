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
    created_by: string;
    updated_by: string;
  }
  sport_type: {
    id: string;
    name: string;
    sports_facilities: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  owner: {
    id: string;
    nick: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  published_at: string;
}
