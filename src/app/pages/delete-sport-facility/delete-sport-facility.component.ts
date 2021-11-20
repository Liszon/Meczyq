import { Component, OnInit } from '@angular/core';
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportsFacility} from "../../core/models/sports-facility";

@Component({
  selector: 'app-delete-sport-facility',
  templateUrl: './delete-sport-facility.component.html',
  styleUrls: ['./delete-sport-facility.component.css']
})
export class DeleteSportFacilityComponent implements OnInit {

  idDelete: string;
  sportsFacilitiesList: SportsFacility[] = [];
  isShow = false;

  constructor(private sportfacilityService: SportsFacilityService) {
    this.idDelete = '';
  }

  ngOnInit(): void {
    this.sportfacilityService.getEventSportFacility().then(res => this.sportsFacilitiesList = res as SportsFacility[]);
  }

  showConfirmation(){
    this.isShow = !this.isShow;
  }

  delete(id: string){
    this.sportfacilityService.deleteEventSportsFacility(id).subscribe(data => {
      console.log(data);
    });
    this.showConfirmation();
  }
}
