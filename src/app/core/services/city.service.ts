import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { City } from "../models/city";


@Injectable({
  providedIn: 'root'
})

export class CityService {

  private eventsPath = "cities";


  constructor(private http: HttpClient) {

  }

  public getEventCity(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()

  }

  public postEventCity(city: City){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(city);
    return this.http.post(environment.apiUrl+this.eventsPath, body, {'headers': headers});
  }

  public getCountEventCity(){
    return this.http.get(environment.apiUrl+this.eventsPath+'/count').toPromise()
  }

  public getIdEventCity(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+'/'+ id).toPromise()
  }

  public putIdEventCity(id: string, city: City){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(city);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body, {'headers': headers});
  }

  public deleteEventCity(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }
}
