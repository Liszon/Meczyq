import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {Tournament} from "../../core/models/tournament";
import {TeamService} from "../../core/services/team.service";
import {Team} from "../../core/models/team";
import {Match} from "../../core/models/match";
import {MatchService} from "../../core/services/match.service";
import {MUserService} from "../../core/services/m-user.service";
import {MUser, MuserFull} from "../../core/models/m-user";

@Component({
  selector: 'app-tournament-data-page',
  templateUrl: './tournament-data-page.component.html',
  styleUrls: ['./tournament-data-page.component.css']
})
export class TournamentDataPageComponent implements OnInit {

  id: string;
  tournamentId: any;
  tournamentList: Tournament[] = [];
  teamsNames: Team[] = [];
  mUserList: any;
  matches: Match[] = [];
  matches2: Match[] = [];
  isShow = false;


  constructor(private tournamentService: TournamentService, private teamService: TeamService, private matchService: MatchService,
              private mUserService: MUserService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.tournamentService.getEventTournament().then(res => this.tournamentList = res as Tournament[]);
    this.matchService.getEventMatch().then(res => this.matches = res as Match[]);
    this.teamService.getEventTeam().then(res => this.teamsNames = res as Team[]);
    this.mUserService.getEventMUser().then(res => this.mUserList = res as MuserFull[]);
  }

  showConfirmation(){
    this.isShow = true;
  }

  tournamentInfo(id: string){

    this.tournamentService.getIdEventTournament(id).then(data => {this.tournamentId = data as Tournament;
      this.mUserService.getIdEventMUsery(this.tournamentId.owner.usersPermissionsUser).then(res => {this.mUserList = res as MuserFull;
        this.showConfirmation();
        this.showMatches();
      });
    });


  }

  showMatches()
  {
    this.matches2 = [];

    let x;
    let y;

    for(x=0; x<this.tournamentId.matches.length; x++)
    {
      for(y=0; y<this.matches.length;y++)
      {
        if(this.tournamentId.matches[x].id == this.matches[y].id)
        {
          this.matches2.push(this.matches[y])
        }
      }
    }

  }

  teamsName(teamId: string)
  {
    let x;
    let temp = ''
    for(x=0; x<this.teamsNames.length; x++)
    {
      if(teamId == this.teamsNames[x].id)
      {
        temp = this.teamsNames[x].name;
        break;
      }
    }
    return temp;
  }
}
