import {Component, Injectable, OnInit} from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {NewTournament, PostData} from "../../core/models/new-tournament";
import {SportsFacility} from "../../core/models/sports-facility";
import {SportsFacilityService} from "../../core/services/sports-facility.service";

@Component({
  selector: 'app-create-tournament-page',
  templateUrl: './create-tournament-page.component.html',
  styleUrls: ['./create-tournament-page.component.css']
})

export class CreateTournamentPageComponent implements OnInit {

  tournament = new PostData();
  sportsFacilityList: SportsFacility[] = [];


  constructor(private tournamentService: TournamentService, private facilityService: SportsFacilityService) { }

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[])
  }

  createTournament(){
    this.tournamentService.postEventTournament(this.tournament).subscribe(data => {
      console.log(data)
    })
  }

}
