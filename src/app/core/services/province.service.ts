import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Province } from "../models/province";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private eventsPath = "provinces";

  constructor(private http: HttpClient) { }

  getEventProvince(){
    return this.http.get<Province[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventProvince(){
    return this.http.get<Province[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventProvince(id: string){
    return this.http.get<Province[]>(environment.apiUrl+this.eventsPath+"/"+{id})
  }

  deleteEventProvince(id: string){
    this.http.delete<Province[]>(environment.apiUrl+this.eventsPath+"/"+{id});
    return console.log("Usunięto prowincje o id: "+{id});
  }

  postEventProvince(province: Province){
    return this.http.post<Province>(environment.apiUrl+this.eventsPath, province);
  }

  putIdEventProvince(id: string, province: Province){
    return this.http.put<Province>(environment.apiUrl+this.eventsPath+'/'+{id}, province);
  }
}
