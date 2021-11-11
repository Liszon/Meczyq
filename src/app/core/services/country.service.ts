import {Injectable, Input, Output} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Country } from "../models/country";
import { NewCountry} from "../models/new-country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private eventsPath = "countries";



  constructor(private http: HttpClient) { }

  getEventCountry(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventCountry(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventCountry(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventCountry(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventCountry(country: NewCountry){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(country);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventCountry(id: string, country: NewCountry){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(country);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, country,{'headers': headers});
  }

}
