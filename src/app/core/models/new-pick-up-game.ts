
export class ObjectWithId
{
  id: bigint|undefined;
}
export class NewPickUpGameClassPost {
  name : string | undefined;
  sports_facility: ObjectWithId ;
  sport_type: ObjectWithId ;
  owner: ObjectWithId ;


  constructor() {
    this.name ="name";
    this.sports_facility = new ObjectWithId();
    this.sport_type = new ObjectWithId();
    this.owner = new ObjectWithId();
  }
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
