import { Component, OnInit } from '@angular/core';
import {MUser} from "../../core/models/m-user";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";
import {MUserService} from "../../core/services/m-user.service";

@Component({
  selector: 'app-user-data-page',
  templateUrl: './user-data-page.component.html',
  styleUrls: ['./user-data-page.component.css']
})
export class UserDataPageComponent implements OnInit {

  response: string = '';
  userID = '';
  mUser: any;
  userPermisionUser: any;
  isShowContent = false;
  isShowNoContent = true;
  userMe: any;

  constructor(private userPermUserService: UserPermissionsUserService, private router: Router, private authService: AuthService,
              private mUserService: MUserService) {

  }

  ngOnInit(): void {
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
    this.userPermUserService.getUserMeSub().subscribe({
      error: error => {
        this.response = error.message;
      }
    });
  }

  showContent(){

    if(this.response == 'Http failure response for http://localhost:1337/users/me: 400 Bad Request')
    {
      this.router.navigate(['/login'])
    } else
    {
      this.userID = this.userMe.id;
      this.userPermUserService.getUsersIdEventUserPermissionsUser(this.userID).then(res => this.userPermisionUser = res as UsersPermissionUser);
      this.mUserService.getIdEventMUsery(this.userID).then(res => this.mUser = res as MUser);
      this.isShowContent = true;
      this.isShowNoContent = false;
    }

  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
