import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  { UserSearchingForGame} from "../models/user-searching-for-game";
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

  postEventUserSearchingForGame(usersearchingforgame: NewUserSearchingForGame){
    return this.http.post(environment.apiUrl+this.eventsPath, usersearchingforgame);
  }

  putIdEventUserSearchingForGame(id: string, usersearchingforgame: NewUserSearchingForGame){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, usersearchingforgame);
  }
}
