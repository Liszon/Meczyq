import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private eventsPath = "email";

  constructor(private http: HttpClient) { }

  getEventEmail(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/settings");
  }


}
