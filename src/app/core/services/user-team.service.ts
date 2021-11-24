import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {AddUserTeam, UserTeam} from "../models/user-team";
import { NewUserTeam} from "../models/new-user-team";

@Injectable({
  providedIn: 'root'
})
export class UserTeamService {

  private eventsPath = "user-teams";

  constructor(private http: HttpClient) { }

  getEventUserTeam(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventUserTeam(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventUserTeam(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventUserTeam(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id)
  }

  postEventUserTeam(userteam: AddUserTeam){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userteam);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers})
  }

  putIdEventUserTeam(id: string, userteam: NewUserTeam){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userteam);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers})
  }
}
