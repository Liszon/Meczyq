import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {MUserService} from "../../core/services/m-user.service";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {Team} from "../../core/models/team";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {MuserFull} from "../../core/models/m-user";
import {AddUserTeam, UserTeam} from "../../core/models/user-team";
import {UserTeamService} from "../../core/services/user-team.service";

@Component({
  selector: 'app-invite-user-to-team-page',
  templateUrl: './invite-user-to-team-page.component.html',
  styleUrls: ['./invite-user-to-team-page.component.css']
})
export class InviteUserToTeamPageComponent implements OnInit {

  idUser: string;
  idTeam: string;
  addUser = new AddUserTeam();
  teamList: Team[] = [];
  teamList2: Team[] = [];
  mUserList: MuserFull[] = [];
  userTeamList: UserTeam[] = [];
  userTeamList2: UserTeam[] = [];
  isShowAddConfirmation = false;
  isShowRemoveConfirmation = false;
  isShowNoContent = false;
  isShowContent = false;
  isShowInitial = true;
  isShowADD = false;
  isShowRemove = false;
  userMe: any;

  constructor(private teamService: TeamService, private muserService: MUserService,
              private userPermUserService: UserPermissionsUserService, private userTeamService: UserTeamService) {
    this.idTeam = '';
    this.idUser = '';
  }

  ngOnInit(): void {
    this.teamService.getEventTeam().then(res => this.teamList = res as Team[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
    this.muserService.getEventMUser().then(res => this.mUserList = res as MuserFull[]);
    this.userTeamService.getEventUserTeam().then(res => this.userTeamList = res as UserTeam[]);
  }

  showAdd()
  {
    if(!this.isShowRemove)
    {
      this.findUserTeams();
      this.showContent();
    }
    this.isShowADD = true;
  }

  showRemove()
  {
    if (!this.isShowADD)
    {
      this.findUserTeams();
      this.showContent();
    }
    this.isShowRemove = true;
  }

  showContent(){

    if(this.teamList2.length != 0)
    {
      this.isShowContent = true;
    } else
    {
      this.isShowNoContent = true;
    }
  }

  findUserTeams(){
    let x;

    for(x=0; x<this.teamList.length; x++)
    {
      if(this.userMe.id == this.teamList[x].owner.id)
      {
        this.teamList2.push(this.teamList[x]);
      }
    }
  }

  showConfirmationADD(){
    this.isShowAddConfirmation = true;
  }

  showConfirmationRemove(){
    this.isShowRemoveConfirmation = true;
  }

  addUserEvent(){
    this.addUser.inviteDate = Date.now().toString();
    this.userTeamService.postEventUserTeam(this.addUser).subscribe(data => {
      console.log(data)
    });
    this.showConfirmationADD();
  }

  removeUserEvent(){
    let x;
    let y;
    for(x=0; x<this.teamList2.length; x++)
    {
      for(y=0; y<this.teamList2[x].team_users.length; y++)
      {
        if((this.idTeam == this.teamList2[x].team_users[y].team) && (this.idUser == this.teamList2[x].team_users[y].mUser))
        {
          this.userTeamService.deleteEventUserTeam(this.teamList2[x].team_users[y].id).subscribe(data => {
            console.log(data)
          });
          break;
        }
      }
    }
    this.showConfirmationRemove();
  }

}
