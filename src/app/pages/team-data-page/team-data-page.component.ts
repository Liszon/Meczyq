import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../core/models/team";

@Component({
  selector: 'app-team-data-page',
  templateUrl: './team-data-page.component.html',
  styleUrls: ['./team-data-page.component.css']
})
export class TeamDataPageComponent implements OnInit {

  teamId: any;
  id_team: string | undefined;

  constructor(private eventService: TeamService) { }

  ngOnInit(): void {
    //this.eventService.getIdEventTeam('1').then(data => {this.teamId = data as Team[];})
  }

  teamInfo(id: string){
    return this.eventService.getIdEventTeam(id).then(data => {this.teamId = data as Team[];})
  }
}
