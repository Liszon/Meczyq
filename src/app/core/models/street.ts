export interface Street {
  id: string;
  name: string;
  postCode: string;
  city: {
    id: string;
    name: string;
    province: string;
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  published_at: string;
}
