import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {PickUpGame} from "../../core/models/pick-up-game";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";

@Component({
  selector: 'app-pick-up-game-data-page',
  templateUrl: './pick-up-game-data-page.component.html',
  styleUrls: ['./pick-up-game-data-page.component.css']
})
export class PickUpGameDataPageComponent implements OnInit {

  id: string;
  pickupList: PickUpGame[] = [];
  userList: UsersPermissionUser[] = [];
  usernameList: any = [];
  pickupId: any;
  isShow = false;

  constructor(private pickupService: PickUpGameService, private userPermUser: UserPermissionsUserService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.pickupService.getEventPickUpGame().then(res => this.pickupList = res as PickUpGame[]);
    this.userPermUser.getUsersEventUserPermissionsUser().then(res => this.userList = res as UsersPermissionUser[]);
  }

  showConfirmation(){
    this.isShow = true;
  }

  pickupInfo(id: string){
    this.pickupService.getIdEventPickUpGame(id).then(data => {this.pickupId = data as PickUpGame[];
      this.usernameList = [];
      let x;
      for(x=0; x<this.pickupId.user_pick_up_games.length; x++)
      {
        this.usernameList.push(this.showUsername(this.pickupId.user_pick_up_games[x].m_user));
      }
      this.showConfirmation();
    });

  }

  showUsername(id: string){
    let userName = '';
    let x;
    for(x=0; x<this.userList.length; x++)
    {
      if(id == this.userList[x].id)
      {
        userName = this.userList[x].username;
        break;
      }
    }
    return userName
  }

}
