export interface SportsFacility {
  id: string;
  street: {
    id: string;
    name: string;
    postCode: string;
    city: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  name: string;
  number: string;
  sportsFacilityPhotos: [{
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {};
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string
    provider_metadata: {};
    related: string;
    created_by: string
    updated_by: string;
  }]
  sport_types: [{
    id: string;
    name: string;
    sports_facilities: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  }];
  published_at: string;
}
