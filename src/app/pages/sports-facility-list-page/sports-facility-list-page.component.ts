import { Component, OnInit } from '@angular/core';
import {SportsFacility} from "../../core/models/sports-facility";
import {SportsFacilityService} from "../../core/services/sports-facility.service";

@Component({
  selector: 'app-sports-facility-list-page',
  templateUrl: './sports-facility-list-page.component.html',
  styleUrls: ['./sports-facility-list-page.component.css']
})
export class SportsFacilityListPageComponent implements OnInit {

  sportsFacility: SportsFacility[] = []

  constructor(private sportfacilityService: SportsFacilityService) { }

  ngOnInit(): void {
    this.sportfacilityService.getEventSportFacility().then(res => this.sportsFacility = res as SportsFacility[]);
  }

}
