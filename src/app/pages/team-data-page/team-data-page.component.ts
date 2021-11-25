import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../core/models/team";
import {MUserService} from "../../core/services/m-user.service";

@Component({
  selector: 'app-team-data-page',
  templateUrl: './team-data-page.component.html',
  styleUrls: ['./team-data-page.component.css']
})
export class TeamDataPageComponent implements OnInit {

  id: string;
  teamId: any;
  teamList: Team[] = [];
  isShow = false;

  constructor(private eventService: TeamService, private mUserService: MUserService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.eventService.getEventTeam().then(res => this.teamList = res as Team[]);
  }

  showConfirmation(){
    this.isShow = true;
  }

  teamInfo(id: string){
    this.eventService.getIdEventTeam(id).then(data => {this.teamId = data as Team[];});
    this.showConfirmation()
  }
}
