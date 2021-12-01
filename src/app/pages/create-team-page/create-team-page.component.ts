import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {CreateNewTeam} from "../../core/models/new-team";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";

@Component({
  selector: 'app-create-team-page',
  templateUrl: './create-team-page.component.html',
  styleUrls: ['./create-team-page.component.css']
})
export class CreateTeamPageComponent implements OnInit {

  newTeam = new CreateNewTeam();
  isShowSucces = false;
  isShowFail = false;
  isShowFailName = false;
  userMe: any;
  response: string;
  status: string;

  constructor(private teamService: TeamService, private userPermUserService: UserPermissionsUserService) {
    this.response = '';
    this.status = '';
  }

  ngOnInit(): void {
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }

  createNewTeamEvent(){
    this.response = '';
    this.newTeam.owner = this.userMe.id;
    this.teamService.postEventTeam(this.newTeam).subscribe(
      data => {console.log(data);
        if(this.response == '')
        {
          this.response = '200'
          this.isShowFailName = false;
          this.isShowFail = false;
          this.isShowSucces = true;
        }
        },
      error => {this.response = error.status;
        if(this.response == '500')
        {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        }
        if(this.response == '403')
        {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        }
        if(this.response == '400')
        {
          this.isShowFailName = false;
          this.isShowFail = true;
          this.isShowSucces = false;
        }
      },
      );



  }

}
