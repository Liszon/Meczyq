import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { City} from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private eventsPath = "cities";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath);
  }

  postsEvent(){
    this.http.post<City>(environment.apiUrl+this.eventsPath)
  }

  getCountEvent(){
    return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/count');
  }

  getIdEvent(){
    //return this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/'+{})
  }

  putIdEvent(){
    this.http.put<City[]>(environment.apiUrl+this.eventsPath+'/'+{})
  }
}
