import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../core/models/team";
import {MUserService} from "../../core/services/m-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";

@Component({
  selector: 'app-team-data-page',
  templateUrl: './team-data-page.component.html',
  styleUrls: ['./team-data-page.component.css']
})
export class TeamDataPageComponent implements OnInit {

  id: string;
  teamId: any;
  teamList: Team[] = [];
  userList: UsersPermissionUser[] = [];
  usernameList: any = [];
  isShow = false;

  constructor(private teamService: TeamService, private userPermUser: UserPermissionsUserService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.teamService.getEventTeam().then(res => this.teamList = res as Team[]);
    this.userPermUser.getUsersEventUserPermissionsUser().then(res => this.userList = res as UsersPermissionUser[]);
  }

  showConfirmation(){
    this.isShow = true;
  }

  teamInfo(id: string){
    this.teamService.getIdEventTeam(id).then(data => {this.teamId = data as Team[];
      this.usernameList = [];
      let x;
      for(x=0; x<this.teamId.team_users.length; x++)
      {
        this.usernameList.push(this.showUsername(this.teamId.team_users[x].mUser));
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
