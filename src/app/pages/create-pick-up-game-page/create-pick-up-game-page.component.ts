import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {SportTypeService} from "../../core/services/sport-type.service";
import {NewPickUpGameClassPost} from "../../core/models/new-pick-up-game";
import {SportsFacility} from "../../core/models/sports-facility";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {SportType} from "../../core/models/sport-type";

@Component({
  selector: 'app-create-pick-up-game-page',
  templateUrl: './create-pick-up-game-page.component.html',
  styleUrls: ['./create-pick-up-game-page.component.css']
})
export class CreatePickUpGamePageComponent implements OnInit {

  constructor(private pickUpGameService: PickUpGameService, private facilityService: SportsFacilityService,
              private userPermUserService: UserPermissionsUserService, private sportTypeService: SportTypeService) {
    this.response = '';
  }

  newPickUpGame = new NewPickUpGameClassPost();
  sportsFacilityList: SportsFacility[] = [];
  userPermUserList: UsersPermissionUser[] = [];
  sportTypesList: SportType[] = [];
  userMe: any;
  isShowSucces = false;
  isShowFail = false;
  isShowFailName = false;
  response: string;

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.userPermUserService.getUsersEventUserPermissionsUser().then(res => this.userPermUserList = res as UsersPermissionUser[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);

  }

  createPickUpgame() {

    this.newPickUpGame.owner = this.userMe.id;
    this.pickUpGameService.postEventPickUpGame(this.newPickUpGame).subscribe(
      data => {
        console.log(data);
        if (this.response == '') {
          this.response = '200'
          this.isShowFailName = false;
          this.isShowFail = false;
          this.isShowSucces = true;
        }
      },
      error => {
        this.response = error.status;

        if (this.response == '500') {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        } else if (this.response == '403') {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        } else if (this.response == '400') {
          this.isShowFailName = false;
          this.isShowFail = true;
          this.isShowSucces = false;
        } else {
          this.isShowFailName = false;
          this.isShowFail = true;
          this.isShowSucces = false;
        }
      },
    );

    if (this.newPickUpGame.name == '') {
      this.isShowFailName = false;
      this.isShowFail = true;
      this.isShowSucces = false;
    }
  }

}
