import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  { UserSearchingForGame} from "../models/user-searching-for-game";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserSearchingForGameService {

  private eventsPath = "user-searching-for-games";

  usersearchingforgame: Observable<UserSearchingForGame[]> | undefined;
  usersearchingforgameCount: Observable<UserSearchingForGame[]> | undefined;
  usersearchingforgameId: Observable<UserSearchingForGame[]> | undefined;
  public usersearchingforgamess: UserSearchingForGame[] | undefined;

  constructor(private http: HttpClient) { }

  getEventUserSearchingForGame(){
    this.usersearchingforgame = this.http.get<UserSearchingForGame[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventUserSearchingForGame(){
    this.usersearchingforgameCount = this.http.get<UserSearchingForGame[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventUserSearchingForGame(id: string){
    this.usersearchingforgameId = this.http.get<UserSearchingForGame[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventUserSearchingForGame(id: string){
    this.http.delete<UserSearchingForGame[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto user-searching-for-game o id: "+{id});
  }

  postEventUserSearchingForGame(usersearchingforgame: UserSearchingForGame){
    return this.http.post<UserSearchingForGame>(environment.apiUrl+this.eventsPath, usersearchingforgame);
  }

  putIdEventUserSearchingForGame(id: string, usersearchingforgame: UserSearchingForGame){
    return this.http.put<UserSearchingForGame>(environment.apiUrl+this.eventsPath+'/'+{id}, usersearchingforgame);
  }
}
