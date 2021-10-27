import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {SportFacility} from "../models/sport-type";

@Injectable({
  providedIn: 'root'
})
export class SportTypeService {

  private eventsPath = "sport-types";

  constructor(private http: HttpClient) { }

  getEventSportType(){
    return this.http.get<SportFacility[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventSportType(){
    return this.http.get<SportFacility[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventSportType(id: string){
    return this.http.get<SportFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventSportType(id: string){
    this.http.delete<SportFacility[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto Sport type o id: "+{id});
  }

  postEventSportType(sporttype: SportFacility){
    return this.http.post<SportFacility>(environment.apiUrl+this.eventsPath, sporttype);
  }

  putIdEventSportType(id: string, sporttype: SportFacility){
    return this.http.put<SportFacility>(environment.apiUrl+this.eventsPath+'/'+{id}, sporttype);
  }
}
