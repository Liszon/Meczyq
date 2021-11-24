import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { UsersPermissionUser} from "../models/users-permission-user";
import { NewUsersPermissionUser} from "../models/new-users-permission-user";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsUserService {

  private eventsPathauth = "auth";
  private eventsPathusers = "users";

  constructor(private http: HttpClient) { }

  getSearchEventUserPermissionsUser(id: string){
    return this.http.get(environment.apiUrl+"users-permissions/search/"+id).toPromise()
  }

  getConnectEventUserPermissionsUser(){
    return this.http.get(environment.apiUrl+"connect/*").toPromise()
  }

  getCallbackEventUserPermissionsUser(provider: string){
    return this.http.get(environment.apiUrl+this.eventsPathauth+"/"+provider+"/callback").toPromise()
  }

  getEmailConfirmationEventUserPermissionsUser(){
    return this.http.get(environment.apiUrl+this.eventsPathauth+"/email-confiramtion").toPromise()
  }

  getUsersEventUserPermissionsUser(){
    return this.http.get(environment.apiUrl+this.eventsPathusers).toPromise()
  }

  getUsersMeEventUserPermissionsUser(){
    return this.http.get(environment.apiUrl+this.eventsPathusers+"/me").toPromise()
  }

  getUserMeSub(){
    return this.http.get(environment.apiUrl+this.eventsPathusers+"/me")
  }

  getUsersIdEventUserPermissionsUser(id: string){
    return this.http.get(environment.apiUrl+this.eventsPathusers+"/"+id).toPromise()
  }

  deleteEventUserPermissionsUser(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPathusers+"/"+id);
  }

  postLocalEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/local", body,{'headers': headers});
  }

  postLocalRegisterEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/local/register", body,{'headers': headers});
  }

  postForgotPassEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/forgot-password", body,{'headers': headers});
  }

  postResetPassEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/reset-password", body,{'headers': headers});
  }

  postSendEmailConfirmationEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/send-email-confirmation", body,{'headers': headers});
  }

  putIdEventUserPermissionsUser(id: string, userpermissions: NewUsersPermissionUser){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.put(environment.apiUrl+this.eventsPathusers+'/'+id, body,{'headers': headers});
  }
}
