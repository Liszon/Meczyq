import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { City } from "../models/city";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private eventsPath = "cities";

  city: any[] = [];
  cityCount: Observable<City[]> | undefined;
  cityId: Observable<City[]> | undefined;
  public citiess: City[] | undefined;

  constructor(private http: HttpClient) { }

  public getEventCity(){
    this.http.get(environment.apiUrl+this.eventsPath).toPromise().then(res => this.city = res as City[])
    return this.city;
  }

  public postEventCity(city: City){
    return this.http.post<City>(environment.apiUrl+this.eventsPath, city);
  }

  public getCountEventCity(){
    this.cityCount = this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/count');
    return this.cityCount;
  }

  public getIdEventCity(id: string){
    this.cityId = this.http.get<City[]>(environment.apiUrl+this.eventsPath+'/'+{id})
    return this.cityId;
  }

  public putIdEventCity(id: string, city: City){
    return this.http.put<City>(environment.apiUrl+this.eventsPath+'/'+{id}, city);
  }

  public deleteEventCity(id: string){
    this.http.delete(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto miasto o id: "+{id});
  }
}
