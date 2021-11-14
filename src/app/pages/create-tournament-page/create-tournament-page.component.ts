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

  tournament = new PostData();
  sportsFacilityList: SportsFacility[] = [];
  userPermUserList: UsersPermissionUser[] = [];
  sportTypesList: SportType[] = [];


  constructor(private tournamentService: TournamentService, private facilityService: SportsFacilityService, private userPermUserService: UserPermissionsUserService, private sportTypeService: SportTypeService) { }

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.userPermUserService.getUsersEventUserPermissionsUser().then(res => this.userPermUserList = res as UsersPermissionUser[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
  }

  createTournament(){
    this.tournamentService.postEventTournament(this.tournament).subscribe(data => {
      console.log(data)
    })
  }

}
