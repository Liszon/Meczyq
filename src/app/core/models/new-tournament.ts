export class PostData{
  owner: string | undefined;
  sports_facility: string | undefined;
  sport_type: string | undefined;
  name: string | undefined;
  start_date: string | undefined;
  end_date: string | undefined;
}

export class PutName{
  name: string | undefined;
}

export class PutSportsFacility{
  sports_facility: {
    id: string;
  } | undefined;
}

export class PutSportType{
  sport_type: {
    id: string;
  } | undefined;
}

export class PutStartDateEndDate{
  start_date: string | undefined;
  end_date: string | undefined;
}


export interface NewTournament {
  owner: string;
  sport_facility: string;
  sport_type: string;
  name: string;
  start_date: string;
  end_date: string;
  team_tournaments: [string];
  published_at: string;
  created_by: string;
  updated_by: string;
}
