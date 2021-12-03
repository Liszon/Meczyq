import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {MUser} from "../models/m-user";
import {NewMUser, PutFirstname, PutLastName, PutPhoneNumber, PutSecondName} from "../models/new-m-user";

@Injectable({
  providedIn: 'root'
})
export class MUserService {

  private eventsPath = "m-users";


  constructor(private http: HttpClient) { }

  getEventMUser(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventMUser(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventMUsery(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventMUser(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventMUser(muser: NewMUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(muser);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventMUser(id: string, muser: NewMUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(muser);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditFirstName(id: string, name: PutFirstname){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(name);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditSecondName(id: string, name: PutSecondName){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(name);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditLastName(id: string, lastname: PutLastName){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(lastname);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditPhoneNumber(id: string, phonenumber: PutPhoneNumber){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(phonenumber);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

}
