import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import  {UsersPermissionUser} from "../models/users-permission-user";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsUserService {

  private eventsPathauth = "auth";
  private eventsPathusers = "users";

  constructor(private http: HttpClient) { }

  getSearchEventUserPermissionsUser(id: string){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+"users-permissions/search/"+{id});
  }

  getConnectEventUserPermissionsUser(){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+"connect/*");
  }

  getCallbackEventUserPermissionsUser(provider: string){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathauth+"/"+{provider}+"/callback");
  }

  getEmailConfirmationEventUserPermissionsUser(){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathauth+"/email-confiramtion");
  }

  getUsersEventUserPermissionsUser(){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers);
  }

  getUsersMeEventUserPermissionsUser(){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers+"/me");
  }

  getUsersIdEventUserPermissionsUser(id: string){
    return this.http.get<UsersPermissionUser[]>(environment.apiUrl+this.eventsPathusers+"/"+{id});
  }

  deleteEventUserPermissionsUser(id: string){
    this.http.delete<UsersPermissionUser>(environment.apiUrl+this.eventsPathusers+"/"+{id});
    return console.log("Usunięto permisje uzytkownika o id: "+{id});
  }
}
