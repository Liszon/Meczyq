import { Component, OnInit } from '@angular/core';
import {SportTypeService} from "../../core/services/sport-type.service";
import {TeamService} from "../../core/services/team.service";
import {SportType} from "../../core/models/sport-type";
import {Team} from "../../core/models/team";
import {PutName} from "../../core/models/new-team";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";

@Component({
  selector: 'app-edit-team-data',
  templateUrl: './edit-team-data.component.html',
  styleUrls: ['./edit-team-data.component.css']
})
export class EditTeamDataComponent implements OnInit {

  idName: string;
  editNameValue = new PutName();
  sportTypesList: SportType[] = [];
  teamsList: Team[] = [];
  teamsList2: Team[] = [];
  isShow = false;
  isShowNoContent = false;
  isShowContent = false;
  isShowInitial = true;
  userMe: any;

  constructor(private teamService: TeamService, private sportTypeService: SportTypeService,
              private userPermUserService: UserPermissionsUserService) {
    this.idName = '';
  }

  ngOnInit(): void {
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.teamService.getEventTeam().then(res => this.teamsList = res as Team[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }

  initialfunc(){
    this.findUserGames();
    this.showContent();
    this.isShowInitial = false;
  }

  findUserGames(){
    let x;

    for(x=0; x<this.teamsList.length; x++)
    {
      if(this.userMe.id == this.teamsList[x].owner.id)
      {
        this.teamsList2.push(this.teamsList[x]);
      }
    }
  }

  showContent(){
    if(this.teamsList2.length != 0)
    {
      this.isShowContent = true;
    } else
    {
      this.isShowNoContent = true;
    }
  }


  showConfirmation(){

    {
      this.isShow = true;
    }
  }

  editName(id: string){
    this.teamService.putEditNameEventTeam(id, this.editNameValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation();
  }

}
