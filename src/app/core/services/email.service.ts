import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import {NewEmail} from "../models/new-email";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private eventsPath = "email";

  constructor(private http: HttpClient) { }

  getEventEmail(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/settings").toPromise()
  }

  postEventEmail(email: NewEmail){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(email);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  postEventEmailTest(email: NewEmail){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(email);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

}
