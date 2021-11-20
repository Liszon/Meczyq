import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {AddUserPickUpGame, UserPickUpGame} from "../models/user-pick-up-game";
import { NewUserPickUpGame} from "../models/new-user-pick-up-game";

@Injectable({
  providedIn: 'root'
})
export class UserPickUpGameService {

  private eventsPath = "user-pick-up-games";


  constructor(private http: HttpClient) { }

  getEventUserPickUpGame(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventUserPickUpGame(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventUserPickUpGame(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventUserPickUpGame(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventUserPickUpGame(userpickupgame: AddUserPickUpGame){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpickupgame);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putAddUserPickUpGameEventUserPickUpGame(id: string, userpickupgame: AddUserPickUpGame){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpickupgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
