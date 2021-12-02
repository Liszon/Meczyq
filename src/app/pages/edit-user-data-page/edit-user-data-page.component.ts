import { Component, OnInit } from '@angular/core';
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {Router} from "@angular/router";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {MUser} from "../../core/models/m-user";
import {MUserService} from "../../core/services/m-user.service";
import {PutFirstname, PutLastName, PutPhoneNumber, PutSecondName} from "../../core/models/new-m-user";

@Component({
  selector: 'app-edit-user-data-page',
  templateUrl: './edit-user-data-page.component.html',
  styleUrls: ['./edit-user-data-page.component.css']
})
export class EditUserDataPageComponent implements OnInit {

  response: string = '';
  temp: string = '';
  newFirstName = new PutFirstname();
  newSeconfName = new PutSecondName();
  lastName = new PutLastName();
  phoneNumber = new PutPhoneNumber();
  userID = '';
  mUser: any;
  userPermisionUser: any;
  isShowContent = false;
  isShowNoContent = true;
  userMe: any;
  isShowNameError = false;
  isShowNameConf = false;
  isShowName2Error = false;
  isShowName2Conf = false;
  isShowLastNameError = false;
  isShowLastNameConf = false;
  isShowphoneNumberError = false;
  isShowphoneNumberConf = false;


  constructor(private userPermUserService: UserPermissionsUserService, private router: Router,
              private mUserService: MUserService) {
  }

  ngOnInit(): void {
    this.userPermUserService.getUserMeSub().subscribe({
      error: error => {
        this.response = error.status;
        if (this.response != '') {
          this.router.navigate(['/login']);
        }
      }
    });

  }


  showContent() {
    this.userID = this.userMe.id;
    this.userPermUserService.getUsersIdEventUserPermissionsUser(this.userID).then(res => this.userPermisionUser = res as UsersPermissionUser);
    this.mUserService.getIdEventMUsery(this.userID).then(res => this.mUser = res as MUser);
    this.isShowContent = true;
    this.isShowNoContent = false;
  }

  editFirstName() {
    if (this.temp.length <= 1) {
      this.isShowNameConf = false;
      this.isShowNameError = true;
    } else {
      this.newFirstName.firstName = this.temp;
      this.mUserService.putEditFirstName(this.userID, this.newFirstName).subscribe(data => {
          console.log(data)
        },
        error => {
          this.response = error.status;

          if (this.response != '') {
            this.isShowNameConf = false;
            this.isShowNameError = true;
          }
        })
    }
  }

  editSecondName(){

  }
}
