export interface SportType {
  id: string;
  name: string;
  sports_facilities: [{
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    sport_types: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }];
  published_at: string;
}