export interface City {
  id: string;
  name: string;
  province: {
    id: string;
    name: string;
    country: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  }
  published_at: string;
}
