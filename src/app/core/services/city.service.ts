import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { City } from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private eventsPath = "cities";

  constructor(private http: HttpClient) { }

  getEventCity(){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath);
  }

  postsEventCity(){
    //this.http.post<City[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventCity(){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/count');
  }

  getIdEventCity(id: string){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/'+{id})
  }

  putIdEventCity(id: string){
    //this.http.put<City[]>(environment.apiUrl+this.eventsPath+'/'+{id});
  }

  deleteEventCity(id: string){
    this.http.delete(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto miasto o id: "+{id});
  }
}
