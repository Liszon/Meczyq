import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Street } from "../models/street";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StreetService {
  private eventsPath = "streets";

  street: Observable<Street[]> | undefined;
  streetCount: Observable<Street[]> | undefined;
  streetId: Observable<Street[]> | undefined;
  public streetss: Street[] | undefined;

  constructor(private http: HttpClient) { }

  getEventStreet(){
    this.street = this.http.get<Street[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventStreet(){
    this.streetCount = this.http.get<Street[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventStreet(id: string){
    this.streetId = this.http.get<Street[]>(environment.apiUrl+this.eventsPath+"/"+{id})
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
