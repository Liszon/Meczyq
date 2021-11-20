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

  idEditName: string;
  idEditSportsFacility: string;
  idEditSportType: string;
  idEditDate: string;
  editNameValue = new PutName();
  editSportsFacilityValue = new PutSportsFacility();
  editSportTypeValue = new PutSportType();
  editDateValue = new PutStartDateEndDate();
  tournamentsList: Tournament[] = [];
  sportTypesList: SportType[] = [];
  sportsFacilityList: SportsFacility[] = [];
  isShowEditName = false;
  isShowEditSportsFacility = false;
  isShowEditSportType = false;
  isShowEditDate = false;

  constructor(private tournamentService: TournamentService, private facilityService: SportsFacilityService, private sportTypeService: SportTypeService) {
    this.idEditName = '';
    this.idEditSportsFacility = '';
    this.idEditSportType = '';
    this.idEditDate = '';
  }

  showConfirmation(option: number){
    switch (option){
      case 1: this.isShowEditName = !this.isShowEditName;
      break;
      case 2: this.isShowEditSportsFacility = !this.isShowEditSportsFacility;
      break;
      case 3: this.isShowEditSportType = !this.isShowEditSportType;
      break;
      case 4: this.isShowEditDate = !this.isShowEditDate;
      break;
    }
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
    });
    this.showConfirmation(1);
  }

  EditSportFacility(id: string)
  {
    this.tournamentService.putEditSportsFacilityEventTournament(id, this.editSportsFacilityValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(2);
  }

  EditSportType(id: string)
  {
    this.tournamentService.putEditSportTypeEventTournament(id, this.editSportTypeValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(3);
  }

  EditDate(id: string)
  {
    this.tournamentService.putEditDateEventTournament(id, this.editDateValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(4);
  }

}
