import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {Tournament} from "../../core/models/tournament";
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../core/models/team";

@Component({
  selector: 'app-tournament-data-page',
  templateUrl: './tournament-data-page.component.html',
  styleUrls: ['./tournament-data-page.component.css']
})
export class TournamentDataPageComponent implements OnInit {

  id: string;
  tournamentId: any;
  tournamentList: Tournament[] = [];
  isShow = false;
  teamNames: any;

  constructor(private tournamentService: TournamentService, private teamService: TeamService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.tournamentService.getEventTournament().then(res => this.tournamentList = res as Tournament[]);
  }

  showConfirmation(){
    this.isShow = true;
  }


  tournamentInfo(id: string){
    this.tournamentService.getIdEventTournament(id).then(data => {this.tournamentId = data as Tournament[];});
    this.showConfirmation();
  }
}
