import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {SportsFacility} from "../models/sports-facility";

@Injectable({
  providedIn: 'root'
})
export class SportsFacilityService {

  private eventsPath = "sports-facilities";

  constructor(private http: HttpClient) { }

  getEventSportFacility(){
    return this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventSportsFacility(){
    return this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventSportsFacility(id: string){
    return this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventSportsFacility(id: string){
    this.http.delete<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto Sport Facility o id: "+{id});
  }
}
