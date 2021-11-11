import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {Tournament} from "../../core/models/tournament";

@Component({
  selector: 'app-tournament-data-page',
  templateUrl: './tournament-data-page.component.html',
  styleUrls: ['./tournament-data-page.component.css']
})
export class TournamentDataPageComponent implements OnInit {

  tournamentId: any;

  constructor(private eventService: TournamentService) { }

  ngOnInit(): void {
  }

  tournamentInfo(id: string){
    this.eventService.getIdEventTournament(id).then(data => {this.tournamentId = data as Tournament[];})
  }

}
