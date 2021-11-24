import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {MUserService} from "../../core/services/m-user.service";
import {PickUpGame} from "../../core/models/pick-up-game";
import {MuserFull} from "../../core/models/m-user";
import {AddUserPickUpGame, UserPickUpGame} from "../../core/models/user-pick-up-game";
import {UserPickUpGameService} from "../../core/services/user-pick-up-game.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";

@Component({
  selector: 'app-invite-user-to-pick-up-game',
  templateUrl: './invite-user-to-pick-up-game.component.html',
  styleUrls: ['./invite-user-to-pick-up-game.component.css']
})
export class InviteUserToPickUpGameComponent implements OnInit {

  idPickUpGame: string;
  addUser = new AddUserPickUpGame();
  pickupList: PickUpGame[] = [];
  pickupList2: PickUpGame[] = [];
  userPickUpGameList: UserPickUpGame[] = [];
  mUserList: MuserFull[] = [];
  isShowAdd = false;
  isShowNoContent = false;
  isShowContent = false;
  isShowInitial = true;
  userMe: any;

  constructor(private pickupService: PickUpGameService, private muserService: MUserService,
              private userPickUpGameService: UserPickUpGameService, private userPermUserService: UserPermissionsUserService) {
    this.idPickUpGame = '';
  }

  ngOnInit(): void {
    this.pickupService.getEventPickUpGame().then(res => this.pickupList = res as PickUpGame[]);
    this.muserService.getEventMUser().then(res => this.mUserList = res as MuserFull[]);
    this.userPickUpGameService.getEventUserPickUpGame().then(res => this.userPickUpGameList = res as UserPickUpGame[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }

  initialfunc(){
    this.findUserGames();
    this.showContent();
    this.isShowInitial = false;
  }

  showContent(){

    if(this.pickupList2.length != 0)
    {
      this.isShowContent = true;
    } else
    {
      this.isShowNoContent = true;
    }
  }

  findUserGames(){
    let x;

    for(x=0; x<this.pickupList.length; x++)
    {
      if(this.userMe.id == this.pickupList[x].owner.id)
      {
        this.pickupList2.push(this.pickupList[x]);
      }
    }
  }

  showConfirmationADD(){
    this.isShowAdd = !this.isShowAdd;
  }

  addUserEvent(){
    this.addUser.participates = true;
    this.addUser.inviteDate = Date.now().toString();
    this.userPickUpGameService.postEventUserPickUpGame(this.addUser).subscribe(data => {
      console.log(data)
    });
    this.showConfirmationADD();
  }


}
