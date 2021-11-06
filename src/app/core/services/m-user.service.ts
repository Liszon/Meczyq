import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {MUser} from "../models/m-user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  private eventsPath = "m-users";

  muser: Observable<MUser[]> | undefined;
  muserCount: Observable<MUser[]> | undefined;
  muserId: Observable<MUser[]> | undefined;
  public muserss: MUser[] | undefined;

  constructor(private http: HttpClient) { }

  getEventMUser(){
    this.muser = this.http.get<MUser[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventMUser(){
    this.muserCount = this.http.get<MUser[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventMUsery(id: string){
    this.muserId = this.http.get<MUser[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventMUser(id: string){
    this.http.delete<MUser[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto M-usera o id: "+{id});
  }

  postEventMUser(muser: MUser){
    return this.http.post<MUser>(environment.apiUrl+this.eventsPath, muser);
  }

  putIdEventMUser(id: string, muser: MUser){
    return this.http.put<MUser>(environment.apiUrl+this.eventsPath+'/'+{id}, muser);
  }
}
