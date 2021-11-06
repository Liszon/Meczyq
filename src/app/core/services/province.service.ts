import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { Province } from "../models/province";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private eventsPath = "provinces";

  province: Observable<Province[]> | undefined;
  provinceCount: Observable<Province[]> | undefined;
  provinceId: Observable<Province[]> | undefined;
  public provincess: Province[] | undefined;

  constructor(private http: HttpClient) { }

  getEventProvince(){
    this.province = this.http.get<Province[]>(environment.apiUrl+this.eventsPath);
  }

  getCountEventProvince(){
    this.provinceCount = this.http.get<Province[]>(environment.apiUrl+this.eventsPath+"/count");
  }

  getIdEventProvince(id: string){
    this.provinceId = this.http.get<Province[]>(environment.apiUrl+this.eventsPath+"/"+{id})
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
