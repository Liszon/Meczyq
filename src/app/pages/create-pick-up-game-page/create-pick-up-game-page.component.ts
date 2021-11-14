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

  constructor(private pickUpGameService: PickUpGameService, private facilityService: SportsFacilityService, private userPermUserService: UserPermissionsUserService, private sportTypeService: SportTypeService) { }

  newPickUpGame = new NewPickUpGameClassPost();
  sportsFacilityList: SportsFacility[] = [];
  userPermUserList: UsersPermissionUser[] = [];
  sportTypesList: SportType[] = [];

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.userPermUserService.getUsersEventUserPermissionsUser().then(res => this.userPermUserList = res as UsersPermissionUser[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
  }

  createPickUpgame() {
    this.pickUpGameService.postEventPickUpGame(this.newPickUpGame).subscribe(data => {
      console.log(data)
    })
  }


}
