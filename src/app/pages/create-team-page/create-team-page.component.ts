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
  isShow = false;
  userMe: any;

  constructor(private teamService: TeamService, private userPermUserService: UserPermissionsUserService) { }

  ngOnInit(): void {
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }

  showConfirmation(){
    this.isShow = !this.isShow;
  }

  createNewTeamEvent(){
    this.newTeam.owner = this.userMe.id;
    this.teamService.postEventTeam(this.newTeam).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation();
  }

}
