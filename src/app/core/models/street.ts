export interface Street {
  id: string;
  name: string;
  postCode: string;
  city: {
    id: string;
    name: string;
    province: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
}
