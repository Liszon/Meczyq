import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {SportType} from "../models/sport-type";
import { NewSportType} from "../models/new-sport-type";

@Injectable({
  providedIn: 'root'
})
export class SportTypeService {

  private eventsPath = "sport-types";

  constructor(private http: HttpClient) { }

  getEventSportType(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventSportType(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventSportType(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventSportType(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventSportType(sporttype: NewSportType){
    return this.http.post(environment.apiUrl+this.eventsPath, sporttype);
  }

  putIdEventSportType(id: string, sporttype: NewSportType){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, sporttype);
  }
}
