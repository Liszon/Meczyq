import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { UsersPermissionRole } from "../models/users-permission-role";
import { NewUsersPermissionRole} from "../models/new-users-permission-role";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionsRoleService {

  private eventsPath = "user-permissions/roles";

  constructor(private http: HttpClient) { }

  getEventUserPermissionsRole(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getIdEventUserPermissionsRole(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventUserPermissionsRole(role: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+role);
  }

  postEventUserPermissionsRole(userpermissions: NewUsersPermissionRole){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putRoleEventUserPermissionsRole(role: string, userpermissions: NewUsersPermissionRole){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(userpermissions);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+role, body,{'headers': headers});
  }
}
