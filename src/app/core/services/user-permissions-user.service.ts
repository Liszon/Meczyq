import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {UsersPermissionUser} from "../models/users-permission-user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsUserService {

  private eventsPathauth = "auth";
  private eventsPathusers = "users";

  userpermissionuserSearchId: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuserConnect: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuserProviderCallback: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuserEamilConf: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuser: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuserMe: Observable<UsersPermissionUser[]> | undefined;
  userpermissionuserId: Observable<UsersPermissionUser[]> | undefined;
  public userpermissionuserss: UsersPermissionUser[] | undefined;

  constructor(private http: HttpClient) { }

  getSearchEventUserPermissionsUser(id: string){
    this.userpermissionuserSearchId = this.http.get<UsersPermissionUser[]>(environment.apiUrl+"users-permissions/search/"+{id});
  }

  getConnectEventUserPermissionsUser(){
    this.userpermissionuserConnect = this.http.get<UsersPermissionUser[]>(environment.apiUrl+"connect/*");
  }

  getCallbackEventUserPermissionsUser(provider: string){
    this.userpermissionuserProviderCallback = this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathauth+"/"+{provider}+"/callback");
  }

  getEmailConfirmationEventUserPermissionsUser(){
    this.userpermissionuserEamilConf = this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathauth+"/email-confiramtion");
  }

  getUsersEventUserPermissionsUser(){
    this.userpermissionuser = this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers);
  }

  getUsersMeEventUserPermissionsUser(){
    this.userpermissionuserMe = this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers+"/me");
  }

  getUsersIdEventUserPermissionsUser(id: string){
    this.userpermissionuserId = this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers+"/"+{id});
  }

  deleteEventUserPermissionsUser(id: string){
    this.http.delete<UsersPermissionUser>(environment.apiUrl+this.eventsPathusers+"/"+{id});
    return console.log("Usunięto permisje uzytkownika o id: "+{id});
  }

  postLocalEventUserPermissionsUser(userpermissions: UsersPermissionUser){
    return this.http.post<UsersPermissionUser>(environment.apiUrl+this.eventsPathauth+"/local", userpermissions);
  }

  postLocalRegisterEventUserPermissionsUser(userpermissions: UsersPermissionUser){
    return this.http.post<UsersPermissionUser>(environment.apiUrl+this.eventsPathauth+"/local/register", userpermissions);
  }

  postForgotPassEventUserPermissionsUser(userpermissions: UsersPermissionUser){
    return this.http.post<UsersPermissionUser>(environment.apiUrl+this.eventsPathauth+"/forgot-password", userpermissions);
  }

  postResetPassEventUserPermissionsUser(userpermissions: UsersPermissionUser){
    return this.http.post<UsersPermissionUser>(environment.apiUrl+this.eventsPathauth+"/reset-password", userpermissions);
  }

  postSendEmailConfirmationEventUserPermissionsUser(userpermissions: UsersPermissionUser){
    return this.http.post<UsersPermissionUser>(environment.apiUrl+this.eventsPathauth+"/send-email-confirmation", userpermissions);
  }

  putIdEventUserPermissionsUser(id: string, userpermissions: UsersPermissionUser){
    return this.http.put<UsersPermissionUser>(environment.apiUrl+this.eventsPathusers+'/'+{id}, userpermissions);
  }
}
