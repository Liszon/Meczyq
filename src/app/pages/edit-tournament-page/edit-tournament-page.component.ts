import { Component, OnInit } from '@angular/core';
import {PutName, PutSportsFacility, PutSportType, PutStartDateEndDate} from "../../core/models/new-tournament";
import {Tournament} from "../../core/models/tournament";
import {SportType} from "../../core/models/sport-type";
import {SportsFacility} from "../../core/models/sports-facility";
import {TournamentService} from "../../core/services/tournament.service";
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportTypeService} from "../../core/services/sport-type.service";

@Component({
  selector: 'app-edit-tournament-page',
  templateUrl: './edit-tournament-page.component.html',
  styleUrls: ['./edit-tournament-page.component.css']
})
export class EditTournamentPageComponent implements OnInit {

  editNameValue = new PutName();
  editSportsFacilityValue = new PutSportsFacility();
  editSportTypeValue = new PutSportType();
  editDateValue = new PutStartDateEndDate();
  tournamentsList: Tournament[] = [];
  sportTypesList: SportType[] = [];
  sportsFacilityList: SportsFacility[] = [];
  id: string;

  constructor(private tournamentService: TournamentService, private facilityService: SportsFacilityService, private sportTypeService: SportTypeService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.tournamentService.getEventTournament().then(res => this.tournamentsList = res as Tournament[]);
  }

  EditName(id: string)
  {
    this.tournamentService.putEditNameEventTournament(id, this.editNameValue).subscribe(data => {
      console.log(data)
    })
  }

  EditSportFacility(id: string)
  {
    this.tournamentService.putEditSportsFacilityEventTournament(id, this.editSportsFacilityValue).subscribe(data => {
      console.log(data)
    })
  }

  EditSportType(id: string)
  {
    this.tournamentService.putEditSportTypeEventTournament(id, this.editSportTypeValue).subscribe(data => {
      console.log(data)
    })
  }

  EditDate(id: string)
  {
    this.tournamentService.putEditDateEventTournament(id, this.editDateValue).subscribe(data => {
      console.log(data)
    })
  }

}
