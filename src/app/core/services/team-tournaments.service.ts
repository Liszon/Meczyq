import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamTournamentsService {

  private eventsPath = "team-tournaments";

  constructor(private http: HttpClient) { }

  getEventTournament(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }
}
