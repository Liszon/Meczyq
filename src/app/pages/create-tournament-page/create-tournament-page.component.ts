import {Component, Injectable, OnInit} from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {NewTournament, PostData} from "../../core/models/new-tournament";
import {SportsFacility} from "../../core/models/sports-facility";
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportType} from "../../core/models/sport-type";
import {SportTypeService} from "../../core/services/sport-type.service";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";

@Component({
  selector: 'app-create-tournament-page',
  templateUrl: './create-tournament-page.component.html',
  styleUrls: ['./create-tournament-page.component.css']
})

export class CreateTournamentPageComponent implements OnInit {

  constructor(private tournamentService: TournamentService, private facilityService: SportsFacilityService,
              private userPermUserService: UserPermissionsUserService, private sportTypeService: SportTypeService) {
    this.response = '';
  }

  response: string;
  tournament = new PostData();
  sportsFacilityList: SportsFacility[] = [];
  userPermUserList: UsersPermissionUser[] = [];
  sportTypesList: SportType[] = [];
  isShowSucces = false;
  isShowFail = false;
  isShowFailName = false;
  userMe: any;

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.userPermUserService.getUsersEventUserPermissionsUser().then(res => this.userPermUserList = res as UsersPermissionUser[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }



  createTournament(){
    //this.isShowSucces = true;
    //this.isShowFailName = false;
    //this.isShowFail = false;
    this.tournament.owner = this.userMe.id;
    this.tournamentService.postEventTournament(this.tournament).subscribe(
      data => {console.log(data);
          this.response = '200'
          this.isShowFailName = false;
          this.isShowFail = false;
          this.isShowSucces = true;
      },
      error => {this.response = error.status;

        if(this.response == '500')
        {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        } else
        if(this.response == '403')
        {
          this.isShowFailName = true;
          this.isShowFail = false;
          this.isShowSucces = false;
        } else
        if(this.response == '400')
        {
          this.isShowFailName = false;
          this.isShowFail = true;
          this.isShowSucces = false;
        } else
        if(this.response == '200')
        {
          this.response = '200'
          this.isShowFailName = false;
          this.isShowFail = false;
          this.isShowSucces = true;
        } else
        {
          this.isShowFailName = false;
          this.isShowFail = true;
          this.isShowSucces = false;
        }
      },
    );

    if(this.tournament.name == '')
    {
      this.isShowFailName = false;
      this.isShowFail = true;
      this.isShowSucces = false;
    }


  }

}
