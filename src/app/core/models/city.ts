export interface City {
  id: string;
  name: string;
  province: {
    id: string;
    name: string;
    country: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }
  published_at: string;
  created_at: string;
  updated_at: string;
}
