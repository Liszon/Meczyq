import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { UserPickUpGame} from "../models/user-pick-up-game";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserPickUpGameService {

  private eventsPath = "user-pick-up-games";

  userpickupgame: Observable<UserPickUpGame[]> | undefined;
  userpickupgameCount: Observable<UserPickUpGame[]> | undefined;
  userpickupgameId: Observable<UserPickUpGame[]> | undefined;
  public userpickupgamess: UserPickUpGame[] | undefined;

  constructor(private http: HttpClient) { }

  getEventUserPickUpGame(){
    this.userpickupgame = this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventUserPickUpGame(){
    this.userpickupgameCount = this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventUserPickUpGame(id: string){
    this.userpickupgameId = this.http.get<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventUserPickUpGame(id: string){
    this.http.delete<UserPickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto user-pick-up-game o id: "+{id});
  }

  postEventUserPickUpGame(userpickupgame: UserPickUpGame){
    return this.http.post<UserPickUpGame>(environment.apiUrl+this.eventsPath, userpickupgame);
  }

  putIdEventUserPickUpGame(id: string, userpickupgame: UserPickUpGame){
    return this.http.put<UserPickUpGame>(environment.apiUrl+this.eventsPath+'/'+{id}, userpickupgame);
  }
}
