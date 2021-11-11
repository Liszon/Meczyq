import { Component, OnInit } from '@angular/core';
import {SportsFacilityService} from "../../core/services/sports-facility.service";

@Component({
  selector: 'app-delete-sport-facility',
  templateUrl: './delete-sport-facility.component.html',
  styleUrls: ['./delete-sport-facility.component.css']
})
export class DeleteSportFacilityComponent implements OnInit {

  constructor(private sportfacilityService: SportsFacilityService) { }

  ngOnInit(): void {
  }

  delete(id: string){
    this.sportfacilityService.deleteEventSportsFacility(id).subscribe(data => {
      console.log(data);
    });
  }
}
