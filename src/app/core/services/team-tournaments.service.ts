import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NewTeamTournament} from "../models/new-team-tournament";

@Injectable({
  providedIn: 'root'
})
export class TeamTournamentsService {

  private eventsPath = "team-tournaments";

  constructor(private http: HttpClient) { }

  getEventTournament(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  postEventTeamTournament(teamTournament: NewTeamTournament){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(teamTournament);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers})
  }
}
