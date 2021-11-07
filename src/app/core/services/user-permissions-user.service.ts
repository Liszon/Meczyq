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

  getUsersIdEventUserPermissionsUser(id: string){
    return this.http.get(environment.apiUrl+this.eventsPathusers+"/"+id).toPromise()
  }

  deleteEventUserPermissionsUser(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPathusers+"/"+id);
  }

  postLocalEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/local", userpermissions);
  }

  postLocalRegisterEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/local/register", userpermissions);
  }

  postForgotPassEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/forgot-password", userpermissions);
  }

  postResetPassEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/reset-password", userpermissions);
  }

  postSendEmailConfirmationEventUserPermissionsUser(userpermissions: NewUsersPermissionUser){
    return this.http.post(environment.apiUrl+this.eventsPathauth+"/send-email-confirmation", userpermissions);
  }

  putIdEventUserPermissionsUser(id: string, userpermissions: NewUsersPermissionUser){
    return this.http.put(environment.apiUrl+this.eventsPathusers+'/'+id, userpermissions);
  }
}
