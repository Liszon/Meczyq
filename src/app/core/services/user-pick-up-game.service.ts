import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { UserPickUpGame} from "../models/user-pick-up-game";

@Injectable({
  providedIn: 'root'
})
export class UserPickUpGameService {

  private eventsPath = "user-pick-up-games";

  constructor(private http: HttpClient) { }

  getEventUserPickUpGame(){
    return this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventUserPickUpGame(){
    return this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventUserPickUpGame(id: string){
    return this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventUserPickUpGame(id: string){
    this.http.delete<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto user-pick-up-game o id: "+{id});
  }
}
