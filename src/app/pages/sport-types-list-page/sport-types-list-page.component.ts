import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SportType} from "../../core/models/sport-type";
import {SportTypeService} from "../../core/services/sport-type.service";

@Component({
  selector: 'app-sport-types-list-page',
  templateUrl: './sport-types-list-page.component.html',
  styleUrls: ['./sport-types-list-page.component.css']
})
export class SportTypesListPageComponent implements OnInit {

  sporttypes: SportType[] = [];
  sportCount: string | undefined;


  constructor(private eventService: SportTypeService) { }

  ngOnInit(): void {
    this.eventService.getEventSportType().then(res => this.sporttypes = res as SportType[]);
    this.eventService.getCountEventSportType().then(res2 => this.sportCount = res2 as string)
  }

}
