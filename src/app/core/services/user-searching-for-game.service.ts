import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {NewUserSearchingGame, UserSearchingForGame} from "../models/user-searching-for-game";
import { NewUserSearchingForGame} from "../models/new-user-searching-for-game";

@Injectable({
  providedIn: 'root'
})
export class UserSearchingForGameService {

  private eventsPath = "user-searching-for-games";

  constructor(private http: HttpClient) { }

  getEventUserSearchingForGame(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventUserSearchingForGame(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventUserSearchingForGame(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventUserSearchingForGame(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventUserSearchingForGame(usersearchingforgame: NewUserSearchingGame){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(usersearchingforgame);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventUserSearchingForGame(id: string, usersearchingforgame: NewUserSearchingForGame){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(usersearchingforgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
