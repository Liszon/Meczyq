import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Province } from "../models/province";
import { NewProvince} from "../models/new-province";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private eventsPath = "provinces";


  constructor(private http: HttpClient) { }

  getEventProvince(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventProvince(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventProvince(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventProvince(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventProvince(province: NewProvince){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(province);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventProvince(id: string, province: NewProvince){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(province);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }
}
