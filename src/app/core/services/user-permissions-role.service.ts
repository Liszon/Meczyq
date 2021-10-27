import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { UsersPermissionRole } from "../models/users-permission-role";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsRoleService {

  private eventsPath = "user-permissions/roles";

  constructor(private http: HttpClient) { }

  getEventUserPermissionsRole(){
    return this.http.get<UsersPermissionRole[]>(environment.apiUrl+this.eventsPath);
  }

  getIdEventUserPermissionsRole(id: string){
    return this.http.get<UsersPermissionRole[]>(environment.apiUrl+this.eventsPath+"/"+{id});
  }

  deleteEventUserPermissionsRole(role: string){
    this.http.delete(environment.apiUrl+this.eventsPath+"/"+{role});
    return console.log("Usunięto role: "+{role});
  }

  postEventUserPermissionsRole(userpermissions: UsersPermissionRole){
    return this.http.post<UsersPermissionRole>(environment.apiUrl+this.eventsPath, userpermissions);
  }

  putRoleEventUserPermissionsRole(role: string, userpermissions: UsersPermissionRole){
    return this.http.put<UsersPermissionRole>(environment.apiUrl+this.eventsPath+'/'+{role}, userpermissions);
  }
}
