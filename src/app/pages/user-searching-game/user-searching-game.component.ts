import { Component, OnInit } from '@angular/core';
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {SportTypeService} from "../../core/services/sport-type.service";
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {UserSearchingForGameService} from "../../core/services/user-searching-for-game.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {SportsFacility} from "../../core/models/sports-facility";
import {SportType} from "../../core/models/sport-type";
import {NewUserSearchingGame} from "../../core/models/user-searching-for-game";
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {PickUpGame} from "../../core/models/pick-up-game";

@Component({
  selector: 'app-user-searching-game',
  templateUrl: './user-searching-game.component.html',
  styleUrls: ['./user-searching-game.component.css']
})
export class UserSearchingGameComponent implements OnInit {

  response: string = '';
  pickupGameList: PickUpGame[] = [];
  myPickupGamesList: PickUpGame[] = [];
  sportTypesList: SportType[] = [];
  sportsFacilityList: SportsFacility[] = [];
  newUserSearchingGame = new NewUserSearchingGame();
  isShowAddConf = false;
  isShowAddError = false;
  isShowCheck = false;
  isShowTable = false;
  userMe: any;
  dane: any;
  searchId: string = '';

  constructor(private userPermUserService: UserPermissionsUserService, private sportTypeService: SportTypeService,
              private facilityService: SportsFacilityService, private userSearchingGameService: UserSearchingForGameService,
              private pickUpGameService: PickUpGameService) { }

  ngOnInit(): void {
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
  }


  addUserSearchingGame() {
    this.newUserSearchingGame.m_user = this.userMe.id;
    this.userSearchingGameService.postEventUserSearchingForGame(this.newUserSearchingGame).subscribe(data => {
        //console.log(data)
      this.dane = data;
      this.searchId = this.dane.id;
        if (this.response == '') {
          this.isShowAddConf = true;
          this.isShowAddError = false;
          this.isShowCheck = true;
        }
      },
      error => {
        this.response = error.status;

        if (this.response != '') {
          this.isShowAddConf = false;
          this.isShowAddError = true;
        }
      })
  }

  check()
  {
    this.isShowTable = true;
    this.pickupGameList = [];
    this.pickUpGameService.getEventPickUpGame().then(res => this.pickupGameList = res as PickUpGame[]);
    let x;
    let y;
    for(x=0; x<this.pickupGameList.length; x++)
    {
      for(y=0; y<this.pickupGameList[x].user_pick_up_games.length; y++)
      {
        if(this.pickupGameList[x].user_pick_up_games[y].m_user == this.userMe.id)
        {
          this.myPickupGamesList.push(this.pickupGameList[x]);
        }
      }
    }
  }

}
