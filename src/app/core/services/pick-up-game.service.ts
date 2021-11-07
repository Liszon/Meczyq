import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {PickUpGame} from "../models/pick-up-game";
import { NewPickUpGame } from "../models/new-pick-up-game";

@Injectable({
  providedIn: 'root'
})
export class PickUpGameService {

  private eventsPath = "pick-up-games";

  constructor(private http: HttpClient) { }

  getEventPickUpGame(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventPickUpGame(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventPickUpGame(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventPickUpGame(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventPickUpGame(pickupgame: NewPickUpGame){
    return this.http.post(environment.apiUrl+this.eventsPath, pickupgame);
  }

  putIdEventPickUpGame(id: string, pickupgame: NewPickUpGame){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, pickupgame);
  }
}
