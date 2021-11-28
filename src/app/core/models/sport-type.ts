export interface SportType {
  id: string;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  sports_facilities: [{
    id: string;
    street: string;
    name: string;
    number: string;
    sportsFacilityPhotos: [string];
    published_at: string;
    created_at: string;
    updated_at: string;
  }];
}
