import { Component, OnInit } from '@angular/core';
import {SportTypeService} from "../../core/services/sport-type.service";
import {TeamService} from "../../core/services/team.service";
import {SportType} from "../../core/models/sport-type";
import {Team} from "../../core/models/team";
import {PutName} from "../../core/models/new-team";

@Component({
  selector: 'app-edit-team-data',
  templateUrl: './edit-team-data.component.html',
  styleUrls: ['./edit-team-data.component.css']
})
export class EditTeamDataComponent implements OnInit {

  idName: string;
  editNameValue = new PutName();
  sportTypesList: SportType[] = [];
  teamsList: Team[] = [];
  isShow = false;

  constructor(private teamService: TeamService, private sportTypeService: SportTypeService) {
    this.idName = '';
  }

  ngOnInit(): void {
    this.sportTypeService.getEventSportType().then(res => this.sportTypesList = res as SportType[]);
    this.teamService.getEventTeam().then(res => this.teamsList = res as Team[]);
  }


  showConfirmation(){
    this.isShow = !this.isShow;
  }

  editName(id: string){
    this.teamService.putEditNameEventTeam(id, this.editNameValue).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation();
  }

}
