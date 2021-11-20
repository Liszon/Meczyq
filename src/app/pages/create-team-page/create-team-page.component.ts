import { Component, OnInit } from '@angular/core';
import {TeamService} from "../../core/services/team.service";
import {CreateNewTeam} from "../../core/models/new-team";

@Component({
  selector: 'app-create-team-page',
  templateUrl: './create-team-page.component.html',
  styleUrls: ['./create-team-page.component.css']
})
export class CreateTeamPageComponent implements OnInit {

  newTeam = new CreateNewTeam();
  isShow = false;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  showConfirmation(){
    this.isShow = !this.isShow;
  }

  createNewTeamEvent(){
    this.teamService.postEventTeam(this.newTeam).subscribe(data => {
      console.log(data)
    });
    this.showConfirmation();
  }

}
