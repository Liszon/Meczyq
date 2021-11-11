import { Component, OnInit } from '@angular/core';
import {SportsFacilityService} from "../../core/services/sports-facility.service";
import {SportsFacility} from "../../core/models/sports-facility";

@Component({
  selector: 'app-sport-facility-data-page',
  templateUrl: './sport-facility-data-page.component.html',
  styleUrls: ['./sport-facility-data-page.component.css']
})
export class SportFacilityDataPageComponent implements OnInit {

  facilitytId: any;

  constructor(private eventService: SportsFacilityService) { }

  ngOnInit(): void {
  }

  sportFacilityInfo(id: string){
    this.eventService.getIdEventSportsFacility(id).then(data => {this.facilitytId = data as SportsFacility[];})
  }

}
