import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { NewTeam} from "../models/new-team";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private eventsPath = "teams";

  constructor(private http: HttpClient) { }

  getEventTeam(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventTeam(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventTeam(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventTeam(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventTeam(team: NewTeam){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(team);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventTeam(id: string, team: Team){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(team);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
