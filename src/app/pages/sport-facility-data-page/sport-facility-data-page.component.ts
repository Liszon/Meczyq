import { Component, OnInit } from '@angular/core';
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportsFacility} from "../../core/models/sports-facility";

@Component({
  selector: 'app-sport-facility-data-page',
  templateUrl: './sport-facility-data-page.component.html',
  styleUrls: ['./sport-facility-data-page.component.css']
})
export class SportFacilityDataPageComponent implements OnInit {

  sportsFacilityList: SportsFacility[] = [];
  facilitytId: any;
  id: string;
  isShow = false;

  constructor(private facilityService: SportsFacilityService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.facilityService.getEventSportFacility().then(res => this.sportsFacilityList = res as SportsFacility[]);
  }

  isShowEvent()
  {
    this.isShow = true;
  }

  sportFacilityInfo(id: string){
    this.facilityService.getIdEventSportsFacility(id).then(data => {this.facilitytId = data as SportsFacility});
    this.isShowEvent();
  }

}
