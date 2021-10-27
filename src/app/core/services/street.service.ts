import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Street } from "../models/street";

@Injectable({
  providedIn: 'root'
})
export class StreetService {
  private eventsPath = "streets";

  constructor(private http: HttpClient) { }

  getEventStreet(){
    return this.http.get<Street[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventStreet(){
    return this.http.get<Street[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventStreet(id: string){
    return this.http.get<Street[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventStreet(id: string){
    this.http.delete<Street[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto ulice o id: "+{id});
  }

  postEventStreet(street: Street){
    return this.http.post<Street>(environment.apiUrl+this.eventsPath, street);
  }

  putIdEventStreet(id: string, street: Street){
    return this.http.put<Street>(environment.apiUrl+this.eventsPath+'/'+{id}, street);
  }
}
