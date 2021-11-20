import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {TeamService} from "../../core/services/team.service";
import {Tournament} from "../../core/models/tournament";
import {Team} from "../../core/models/team";

@Component({
  selector: 'app-invite-team-to-tournament-page',
  templateUrl: './invite-team-to-tournament-page.component.html',
  styleUrls: ['./invite-team-to-tournament-page.component.css']
})
export class InviteTeamToTournamentPageComponent implements OnInit {

  id: string;
  idTeam: string;
  idRemove: string;
  idTeamRemove: string;
  tournamentsList: Tournament[] = [];
  teamslist: Team[] = [];
  isShowAdd = false;
  isShowRemove = false;


  constructor(private tournamentService: TournamentService, private teamService: TeamService) {
    this.id = '';
    this.idTeam = '';
    this.idRemove = '';
    this.idTeamRemove = '';
  }

  ngOnInit(): void {
    this.tournamentService.getEventTournament().then(res => this.tournamentsList = res as Tournament[]);
    this.teamService.getEventTeam().then(res => this.teamslist = res as Team[]);
  }


  showConfirmationADD(){
    this.isShowAdd = !this.isShowAdd;
  }

  showConfirmationRemove(){
    this.isShowRemove = !this.isShowRemove;
  }

  addTeam(id: string){
    var x;
    var y;
    var temp = '{ "team_tournaments": [';
    for(x=0;x<this.tournamentsList.length;x++){
      if(this.tournamentsList[x].id == id)
      {
        for(y=0;y<this.tournamentsList[x].team_tournaments.length;y++)
        {
          temp = temp + ' { "id": "'+this.tournamentsList[x].team_tournaments[y].id+'"},';
        }
        break;
      }
    }
    temp = temp + ' { "id": "'+this.idTeam+'"}]}';
    this.tournamentService.putEditTeamTournamentsEventTournament(id, temp).subscribe(data => {
      console.log(data)
    })
    this.showConfirmationADD();
  }

  deleteTeam(id: string){
    var x;
    var y;
    var temp = '{ "team_tournaments": [';
    for(x=0;x<this.tournamentsList.length;x++){
      if(this.tournamentsList[x].id == id)
      {
        for(y=0;y<this.tournamentsList[x].team_tournaments.length;y++)
        {
          if(this.tournamentsList[x].team_tournaments[y].id != this.idTeamRemove)
          {
            temp = temp + ' { "id": "'+this.tournamentsList[x].team_tournaments[y].id+'"}';
          }
          if(y<this.tournamentsList[x].team_tournaments.length-1 && y!=0 && this.tournamentsList[x].team_tournaments[y].id != this.idTeamRemove)
          {
            temp = temp + ',';
          }
          if(y==this.tournamentsList[x].team_tournaments.length-1){
            temp = temp + ']}'
          }
        }
        break;
      }
    }
    this.tournamentService.putEditTeamTournamentsEventTournament(id, temp).subscribe(data => {
      console.log(data)
    })
    this.showConfirmationRemove();
  }

}
