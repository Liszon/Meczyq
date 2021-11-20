import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportTypeService} from "../../core/services/sport-type.service";
import {SportType} from "../../core/models/sport-type";
import {SportsFacility} from "../../core/models/sports-facility";
import {PickUpGame} from "../../core/models/pick-up-game";
import {PutName, PutSportsFacility, PutSportType} from "../../core/models/new-pick-up-game";

@Component({
  selector: 'app-edit-pick-up-game-data-page',
  templateUrl: './edit-pick-up-game-data-page.component.html',
  styleUrls: ['./edit-pick-up-game-data-page.component.css']
})
export class EditPickUpGameDataPageComponent implements OnInit {

  idEditName: string;
  idEditSportType: string;
  idEditSportsFacility: string;
  EditNameValue = new PutName();
  EditSportTypeValue = new PutSportType();
  EditSportsFacilityValue = new PutSportsFacility();
  sportTypesList: SportType[] = [];
  sportsFacilityList: SportsFacility[] = [];
  pickUpGameList: PickUpGame[] =[];
  isShowEditName = false;
  isShowEditSportType = false;
  isShowEditSportsFacility = false;

  constructor(private pickupService: PickUpGameService, private facilityService: SportsFacilityService, private sportTypeService: SportTypeService) {
    this.idEditSportsFacility = '';
    this.idEditSportType = '';
    this.idEditName = '';
  }

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.pickupService.getEventPickUpGame().then(res => this.pickUpGameList = res as PickUpGame[]);
  }

  showConfirmation(option: number){
    switch (option){
      case 1: this.isShowEditName = !this.isShowEditName;
        break;
      case 2: this.isShowEditSportsFacility = !this.isShowEditSportsFacility;
        break;
      case 3: this.isShowEditSportType = !this.isShowEditSportType;
        break;
    }
  }

  editName(id: string){
    this.pickupService.putEditNameEventPickUpGame(id, this.EditNameValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(1);
  }

  editSportFacility(id: string){
    this.pickupService.putEditSporstFacilityEventPickUpGame(id, this.EditSportsFacilityValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(2);
  }

  editSportType(id: string){
    this.pickupService.putEditSportTypeEventPickUpGame(id, this.EditSportTypeValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation(3);
  }

}
