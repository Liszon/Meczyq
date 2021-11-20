import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {MUserService} from "../../core/services/m-user.service";
import {PickUpGame} from "../../core/models/pick-up-game";
import {MuserFull} from "../../core/models/m-user";
import {AddUserPickUpGame, UserPickUpGame} from "../../core/models/user-pick-up-game";
import {UserPickUpGameService} from "../../core/services/user-pick-up-game.service";

@Component({
  selector: 'app-invite-user-to-pick-up-game',
  templateUrl: './invite-user-to-pick-up-game.component.html',
  styleUrls: ['./invite-user-to-pick-up-game.component.css']
})
export class InviteUserToPickUpGameComponent implements OnInit {

  idPickUpGame: string;
  addUser = new AddUserPickUpGame();
  pickupList: PickUpGame[] = [];
  userPickUpGameList: UserPickUpGame[] = [];
  mUserList: MuserFull[] = [];
  isShowAdd = false;

  constructor(private pickupService: PickUpGameService, private muserService: MUserService, private userPickUpGameService: UserPickUpGameService) {
    this.idPickUpGame = '';
  }

  ngOnInit(): void {
    this.pickupService.getEventPickUpGame().then(res => this.pickupList = res as PickUpGame[]);
    this.muserService.getEventMUser().then(res => this.mUserList = res as MuserFull[]);
    this.userPickUpGameService.getEventUserPickUpGame().then(res => this.userPickUpGameList = res as UserPickUpGame[])
  }

  showConfirmationADD(){
    this.isShowAdd = !this.isShowAdd;
  }

  addUserEvent(){
    this.addUser.participates = false;
    this.addUser.inviteDate = Date.now().toString();
    this.userPickUpGameService.postEventUserPickUpGame(this.addUser).subscribe(data => {
      console.log(data)
    });
    this.showConfirmationADD();
  }


}
