import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {UserTeam} from "../models/user-team";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserTeamService {

  private eventsPath = "user-teams";

  userteam: Observable<UserTeam[]> | undefined;
  userteamCount: Observable<UserTeam[]> | undefined;
  userteamId: Observable<UserTeam[]> | undefined;
  public userteamss: UserTeam[] | undefined;

  constructor(private http: HttpClient) { }

  getEventUserTeam(){
    this.userteam = this.http.get<UserTeam[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventUserTeam(){
    this.userteamCount = this.http.get<UserTeam[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventUserTeam(id: string){
    this.userteamId = this.http.get<UserTeam[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventUserTeam(id: string){
    this.http.delete<UserTeam[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto user-team o id: "+{id});
  }

  postEventUserTeam(userteam: UserTeam){
    return this.http.post<UserTeam>(environment.apiUrl+this.eventsPath, userteam);
  }

  putIdEventUserTeam(id: string, userteam: UserTeam){
    return this.http.put<UserTeam>(environment.apiUrl+this.eventsPath+'/'+{id}, userteam);
  }
}
