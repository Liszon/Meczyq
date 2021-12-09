import { Component, OnInit } from '@angular/core';
import {MatchResultService} from "../../core/services/match-result.service";
import {MatchService} from "../../core/services/match.service";
import {TournamentService} from "../../core/services/tournament.service";
import {MatchResult} from "../../core/models/match-result";
import {Tournament} from "../../core/models/tournament";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {EditDatePut, EditResultPut, NewMatchPost} from "../../core/models/new-match";
import {Team} from "../../core/models/team";
import {TeamService} from "../../core/services/team.service";
import {TeamTournamentsService} from "../../core/services/team-tournaments.service";
import {TeamTournament} from "../../core/models/team-tournament";
import {Match} from "../../core/models/match";

@Component({
  selector: 'app-tournament-game-page',
  templateUrl: './tournament-game-page.component.html',
  styleUrls: ['./tournament-game-page.component.css']
})
export class TournamentGamePageComponent implements OnInit {

  tournamentID: string;
  team1ID: string;
  team2ID: string;
  newMatch = new NewMatchPost();
  teamTournamentsList: TeamTournament[] = [];
  teamsList: Team[] = [];
  matchResultList: MatchResult[] = [];
  tournamentsList: Tournament[] = [];
  tournamentsList2: Tournament[] = [];
  tournamentDetails: any;
  userMe: any;
  isShowInitial = true;
  isShowTournamentList = false;
  isShowNoContent = false;


  matches: Match[] = [];
  matches2: Match[] = [];
  response: string;
  idMatchEditDate: string;
  idmatchEditResult: string;
  editDateValue = new EditDatePut();
  editResultValue = new EditResultPut();
  isShowMatchesList = false;
  isShowConfDate = false;
  isShowConfResult = false;
  isShowErrorDate = false;
  isShowErrorResult = false;
  isShow2matchList = false;


  constructor(private matchResultService: MatchResultService, private matchService: MatchService,
              private tournamentService: TournamentService, private userPermUserService: UserPermissionsUserService,
              private teamService: TeamService, private teamTournamentsService: TeamTournamentsService) {
    this.tournamentID = '';
    this.team1ID = '';
    this.team2ID = '';
    this.response = '';
    this.idMatchEditDate = '';
    this.idmatchEditResult = '';
  }

  ngOnInit(): void {
    this.matchResultService.getEventMatchResult().then(res => this.matchResultList = res as MatchResult[]);
    this.tournamentService.getEventTournament().then(res => this.tournamentsList = res as Tournament[]);
    this.matchService.getEventMatch().then(res => this.matches = res as Match[]);
    this.teamService.getEventTeam().then(res => this.teamsList = res as Team[]);

    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
    this.teamTournamentsService.getEventTournament().then(res => this.teamTournamentsList = res as TeamTournament[]);
  }

  initialfunc(){
    this.findUserTournaments();
    this.showContent();
    this.isShowInitial = false;
  }

  findUserTournaments(){
    let x;

    for(x=0; x<this.tournamentsList.length; x++)
    {
      if(this.userMe.id == this.tournamentsList[x].owner.id)
      {
        this.tournamentsList2.push(this.tournamentsList[x]);
      }
    }
  }

  showContent(){

    if(this.tournamentsList2.length != 0)
    {
      this.isShowTournamentList = true;
    } else
    {
      this.isShowNoContent = true;
    }
  }

  showMatches(id: string){
    this.isShowTournamentList = false;
    this.tournamentService.getIdEventTournament(id).then(res => {this.tournamentDetails = res as Tournament;
      this.tournamentService.getIdEventTournament(id).then(res => {this.tournamentDetails = res as Tournament;
        this.assignMatches();
        this.isShowMatchesList = true;
      });
    });
   // this.isShow2matchList = true;
  }
/*
  showMatches2(id: string){
    this.isShow2matchList = false;
    this.tournamentService.getIdEventTournament(id).then(res => this.tournamentDetails = res as Tournament);
    this.assignMatches();
    this.isShowMatchesList = true;
  }

 */

  assignMatches() {

    this.matches2 = [];

    let x;
    let y;

    for (x = 0; x < this.tournamentDetails.matches.length; x++) {
      for (y = 0; y < this.matches.length; y++) {
        if (this.tournamentDetails.matches[x].id == this.matches[y].id) {
          this.matches2.push(this.matches[y])
        }
      }
    }


  }

/*
  addResult(){
    this.newMatch.tournament = this.tournamentID;

    if(this.newMatch.teamTournament1 == this.newMatch.teamTournament2)
    {
      this.isShowConfirmation = false;
      this.isShowError = true;
    } else
    {
      this.isShowError = false;

      this.matchService.postEventMatch(this.newMatch).subscribe(data => {
        console.log(data)
      });
      this.isShowConfirmation = true;
    }
  }

 */

  editDate(id: string){

    if(this.editDateValue.date == '')
    {
      this.isShowConfDate = false;
      this.isShowErrorDate = true;
    } else
    {
      this.matchService.putEditDateEventMatch(id, this.editDateValue).subscribe(
        data => {console.log(data);
          this.response = '200'
          this.isShowConfDate = true;
          this.isShowErrorDate = false;
        },
        error => {this.response = error.status;

          if(this.response != '')
          {
            this.isShowConfDate = false;
            this.isShowErrorDate = true;
          }
        },
      );
    }
  }

  teamName(teamId: string){
    let teamName = '';
    let x;
    for(x=0; x<this.teamsList.length; x++)
    {
      if(teamId == this.teamsList[x].id)
      {
        teamName = this.teamsList[x].name;
        break;
      }
    }
    return teamName
  }

  editResult(id: string){

    if(this.editResultValue.matchResult == '')
    {
      this.isShowConfResult = false;
      this.isShowErrorResult = true;
    } else
    {
      this.matchService.putEditResultEventMatch(id, this.editResultValue).subscribe(
        data => {console.log(data);
          this.response = '200'
          this.isShowConfResult = true;
          this.isShowErrorResult = false;
        },
        error => {this.response = error.status;

          if(this.response != '')
          {
            this.isShowConfResult = false;
            this.isShowErrorResult = true;
          }
        },
      );
    }
  }

}
