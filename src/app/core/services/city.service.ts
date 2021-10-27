import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
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

  postEventCity(city: City){
    return this.http.post<City>(environment.apiUrl+this.eventsPath, city);
  }

  getCountEventCity(){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/count');
  }

  getIdEventCity(id: string){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/'+{id})
  }

  putIdEventCity(id: string, city: City){
    return this.http.put<City>(environment.apiUrl+this.eventsPath+'/'+{id}, city);
  }

  deleteEventCity(id: string){
    this.http.delete(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto miasto o id: "+{id});
  }
}

//Jezeli potrzebne headery to zostawic
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
