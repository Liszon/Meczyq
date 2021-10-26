import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {MUser} from "../models/m-user";

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  private eventsPath = "m-users";

  constructor(private http: HttpClient) { }

  getEventMUser(){
    return this.http.get<MUser[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventMUser(){
    return this.http.get<MUser[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventMUsery(id: string){
    return this.http.get<MUser[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventMUser(id: string){
    this.http.delete<MUser[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto M-usera o id: "+{id});
  }
}
