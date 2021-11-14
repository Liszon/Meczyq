export class NewPickUpGameClassPost {
  name : string | undefined;
  sports_facility: string | undefined;
  sport_type: string | undefined;
  owner: string | undefined;
}

export interface NewPickUpGame {
  name: string;
  sports_facility: string;
  sport_type: string;
  owner: string;
  published_at: string;
  created_by: string;
  updated_by: string;
}
