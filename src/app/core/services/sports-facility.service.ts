import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {SportsFacility} from "../models/sports-facility";
import { NewSportsFacility} from "../models/new-sports-facility";

@Injectable({
  providedIn: 'root'
})
export class SportsFacilityService {

  private eventsPath = "sports-facilities";

  constructor(private http: HttpClient) { }

  getEventSportFacility(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventSportsFacility(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventSportsFacility(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventSportsFacility(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventSportsFacility(sportfacility: NewSportsFacility){
    return this.http.post(environment.apiUrl+this.eventsPath, sportfacility);
  }

  putIdEventSportsFacility(id: string, sportfacility: NewSportsFacility){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, sportfacility);
  }
}
