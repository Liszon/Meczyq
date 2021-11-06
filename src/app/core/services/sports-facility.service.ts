import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {SportsFacility} from "../models/sports-facility";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SportsFacilityService {

  private eventsPath = "sports-facilities";

  sportfacility: Observable<SportsFacility[]> | undefined;
  sportfacilityCount: Observable<SportsFacility[]> | undefined;
  sportfacilityId: Observable<SportsFacility[]> | undefined;
  public sportfacilitiess: SportsFacility[] | undefined;

  constructor(private http: HttpClient) { }

  getEventSportFacility(){
    this.sportfacility = this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventSportsFacility(){
    this.sportfacilityCount = this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventSportsFacility(id: string){
    this.sportfacilityId = this.http.get<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventSportsFacility(id: string){
    this.http.delete<SportsFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto Sport Facility o id: "+{id});
  }

  postEventSportsFacility(sportfacility: SportsFacility){
    return this.http.post<SportsFacility>(environment.apiUrl+this.eventsPath, sportfacility);
  }

  putIdEventSportsFacility(id: string, sportfacility: SportsFacility){
    return this.http.put<SportsFacility>(environment.apiUrl+this.eventsPath+'/'+{id}, sportfacility);
  }
}
