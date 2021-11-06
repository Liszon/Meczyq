import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {SportType} from "../models/sport-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SportTypeService {

  private eventsPath = "sport-types";

  sporttype: Observable<SportType[]> | undefined;
  sporttypeCount: Observable<SportType[]> | undefined;
  sporttypeId: Observable<SportType[]> | undefined;
  public sporttypess: SportType[] | undefined;

  constructor(private http: HttpClient) { }

  getEventSportType(){
    this.sporttype = this.http.get<SportType[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventSportType(){
    this.sporttypeCount = this.http.get<SportType[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventSportType(id: string){
    this.sporttypeId = this.http.get<SportType[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventSportType(id: string){
    this.http.delete<SportType[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto Sport type o id: "+{id});
  }

  postEventSportType(sporttype: SportType){
    return this.http.post<SportType>(environment.apiUrl+this.eventsPath, sporttype);
  }

  putIdEventSportType(id: string, sporttype: SportType){
    return this.http.put<SportType>(environment.apiUrl+this.eventsPath+'/'+{id}, sporttype);
  }
}
