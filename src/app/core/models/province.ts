export interface Province {
  id: string;
  name: string;
  country: {
    id: string;
    name: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  published_at: string;
}
