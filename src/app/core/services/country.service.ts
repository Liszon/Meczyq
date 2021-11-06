import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Country } from "../models/country";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private eventsPath = "countries";

  country: Observable<Country[]> | undefined;
  countryCount: Observable<Country[]> | undefined;
  countryId: Observable<Country[]> | undefined;
  public countriess: Country[] | undefined;

  constructor(private http: HttpClient) { }

  getEventCountry(){
    this.http.get<Country[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventCountry(){
    this.countryCount = this.http.get<Country[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventCountry(id: string){
    this.countryId = this.http.get<Country[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventCountry(id: string){
    this.http.delete<Country[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto kraj o id: "+{id});
  }

  postEventCountry(country: Country){
    return this.http.post<Country>(environment.apiUrl+this.eventsPath, country);
  }

  putIdEventCountry(id: string, country: Country){
    return this.http.put<Country>(environment.apiUrl+this.eventsPath+'/'+{id}, country);
  }

}
