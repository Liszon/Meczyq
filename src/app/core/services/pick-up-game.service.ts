import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {PickUpGame} from "../models/pick-up-game";
import {
  NewPickUpGame,
  NewPickUpGameClassPost,
  PutName,
  PutSportsFacility,
  PutSportType
} from "../models/new-pick-up-game";
import {Observable} from "rxjs";

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

  postEventPickUpGame(pickupgame: NewPickUpGameClassPost): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(pickupgame);
    console.log(body)
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putEditNameEventPickUpGame(id: string, pickupgame: PutName){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(pickupgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditSporstFacilityEventPickUpGame(id: string, pickupgame: PutSportsFacility){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(pickupgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditSportTypeEventPickUpGame(id: string, pickupgame: PutSportType){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(pickupgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditUserPickUpGamesEventPickUpGame(id: string, body: string){
    const headers = { 'content-type': 'application/json'};
    //const body=JSON.stringify(pickupgame);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
