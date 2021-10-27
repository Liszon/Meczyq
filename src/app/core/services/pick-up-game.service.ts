import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {PickUpGame} from "../models/pick-up-game";

@Injectable({
  providedIn: 'root'
})
export class PickUpGameService {

  private eventsPath = "pick-up-games";

  constructor(private http: HttpClient) { }

  getEventPickUpGame(){
    return this.http.get<PickUpGame[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventPickUpGame(){
    return this.http.get<PickUpGame[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventPickUpGame(id: string){
    return this.http.get<PickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventPickUpGame(id: string){
    this.http.delete<PickUpGame[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto Pick Up game o id: "+{id});
  }

  postEventPickUpGame(pickupgame: PickUpGame){
    return this.http.post<PickUpGame>(environment.apiUrl+this.eventsPath, pickupgame);
  }

  putIdEventPickUpGame(id: string, pickupgame: PickUpGame){
    return this.http.put<PickUpGame>(environment.apiUrl+this.eventsPath+'/'+{id}, pickupgame);
  }
}
