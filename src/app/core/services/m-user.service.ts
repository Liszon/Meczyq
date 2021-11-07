import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {MUser} from "../models/m-user";
import { NewMUser} from "../models/new-m-user";

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  private eventsPath = "m-users";


  constructor(private http: HttpClient) { }

  getEventMUser(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventMUser(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventMUsery(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventMUser(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventMUser(muser: NewMUser){
    return this.http.post(environment.apiUrl+this.eventsPath, muser);
  }

  putIdEventMUser(id: string, muser: NewMUser){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, muser);
  }
}
