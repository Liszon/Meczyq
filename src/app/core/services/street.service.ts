import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Street } from "../models/street";
import { NewStreet} from "../models/new-street";


@Injectable({
  providedIn: 'root'
})
export class StreetService {
  private eventsPath = "streets";

  constructor(private http: HttpClient) { }

  getEventStreet(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventStreet(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventStreet(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventStreet(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventStreet(street: NewStreet){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(street);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventStreet(id: string, street: NewStreet){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(street);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
