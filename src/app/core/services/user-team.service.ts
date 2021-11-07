import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {UserTeam} from "../models/user-team";
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
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventUserTeam(userteam: NewUserTeam){
    return this.http.post(environment.apiUrl+this.eventsPath, userteam);
  }

  putIdEventUserTeam(id: string, userteam: NewUserTeam){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, userteam);
  }
}
