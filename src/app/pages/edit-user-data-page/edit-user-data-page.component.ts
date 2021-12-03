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
  tempFirstName: string = '';
  newFirstName = new PutFirstname();
  tempSecondName: string = '';
  newSecondName = new PutSecondName();
  tempLastName: string = '';
  newlastName = new PutLastName();
  tempPhoneNumber: string = '';
  newphoneNumber = new PutPhoneNumber();
  userID = '';
  mUser: any;
  userPermisionUser: any;
  isShowContent = true;
  isShowNoContent = false;
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
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
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
    this.userID = this.userMe.id;
    this.response = '';
    if (this.tempFirstName.length <= 1) {
      this.isShowNameConf = false;
      this.isShowNameError = true;
    } else {
      this.newFirstName.firstName = this.tempFirstName;
      this.mUserService.putEditFirstName(this.userID, this.newFirstName).subscribe(data => {
          console.log(data)
          if(this.response == '')
          {
            this.isShowNameConf = true;
            this.isShowNameError = false;
          }
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
    this.userID = this.userMe.id;
    this.response = '';
    if (this.tempSecondName.length <= 1) {
      this.isShowName2Conf = false;
      this.isShowName2Error = true;
    } else {
      this.newSecondName.secondName = this.tempSecondName;
      this.mUserService.putEditSecondName(this.userID, this.newSecondName).subscribe(data => {
          console.log(data)
          if(this.response == '')
          {
            this.isShowName2Conf = true;
            this.isShowName2Error = false;
          }
        },
        error => {
          this.response = error.status;

          if (this.response != '') {
            this.isShowName2Conf = false;
            this.isShowName2Error = true;
          }
        })
    }
  }

  editLastName(){
    this.userID = this.userMe.id;
    this.response = '';
    if (this.tempLastName.length <= 1) {
      this.isShowLastNameConf = false;
      this.isShowLastNameError = true;
    } else {
      this.newlastName.lastName = this.tempLastName;
      this.mUserService.putEditLastName(this.userID, this.newlastName).subscribe(data => {
          console.log(data)
          if (this.response == '') {
            this.isShowLastNameConf = true;
            this.isShowLastNameError = false;
          }
        },
        error => {
          this.response = error.status;

          if (this.response != '') {
            this.isShowLastNameConf = false;
            this.isShowLastNameError = true;
          }
        })
    }
  }

  editPhoneNumber(){
    this.userID = this.userMe.id;
    this.response = '';
    if (this.tempPhoneNumber.length <= 11) {
      this.isShowLastNameConf = false;
      this.isShowLastNameError = true;
    } else {
      this.newphoneNumber.phoneNumber = this.tempPhoneNumber;
      this.mUserService.putEditPhoneNumber(this.userID, this.newphoneNumber).subscribe(data => {
          console.log(data)
          if (this.response == '') {
            this.isShowphoneNumberConf = true;
            this.isShowphoneNumberError = false;
          }
        },
        error => {
          this.response = error.status;

          if (this.response != '') {
            this.isShowphoneNumberConf = false;
            this.isShowphoneNumberError = true;
          }
        })
    }
  }

}
