import { Component, OnInit } from '@angular/core';
import {MatchResultService} from "../../core/services/match-result.service";
import {MatchService} from "../../core/services/match.service";
import {TournamentService} from "../../core/services/tournament.service";
import {MatchResult} from "../../core/models/match-result";
import {Tournament} from "../../core/models/tournament";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {NewMatchPost} from "../../core/models/new-match";
import {Team} from "../../core/models/team";
import {TeamService} from "../../core/services/team.service";
import {TeamTournamentsService} from "../../core/services/team-tournaments.service";
import {TeamTournament} from "../../core/models/team-tournament";

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
  isShowTeamList = false;
  isShowConfirmation = false;
  isShowError = false;
  isShowNoContent = false;


  constructor(private matchResultService: MatchResultService, private matchService: MatchService,
              private tournamentService: TournamentService, private userPermUserService: UserPermissionsUserService,
              private teamService: TeamService, private teamTournamentsService: TeamTournamentsService) {
    this.tournamentID = '';
    this.team1ID = '';
    this.team2ID = '';
  }

  ngOnInit(): void {
    this.matchResultService.getEventMatchResult().then(res => this.matchResultList = res as MatchResult[]);
    this.tournamentService.getEventTournament().then(res => this.tournamentsList = res as Tournament[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
    this.teamService.getEventTeam().then(res => this.teamsList = res as Team[]);
    this.teamTournamentsService.getEventTournament().then(res => this.teamTournamentsList = res as TeamTournament[]);
  }

  initialfunc(){
    this.findUserGames();
    this.showContent();
    this.isShowInitial = false;
  }

  findUserGames(){
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

  showTeams(id: string){
    this.isShowTournamentList = false;
    this.tournamentService.getIdEventTournament(id).then(res => this.tournamentDetails = res as Tournament);
    this.isShowTeamList = true;
  }

  addResult(){
    let x;

    if(this.team1ID == this.team2ID)
    {
      this.isShowConfirmation = false;
      this.isShowError = true;
    } else
    {
      this.isShowError = false;
      for (x=0; x<this.teamTournamentsList.length; x++)
      {
        if(this.tournamentID == this.teamTournamentsList[x].tournament.id && this.team1ID == this.teamTournamentsList[x].team.id)
        {
          this.newMatch.teamTournament1 = this.teamTournamentsList[x].id;
        }
        if(this.tournamentID == this.teamTournamentsList[x].tournament.id && this.team2ID == this.teamTournamentsList[x].team.id)
        {
          this.newMatch.teamTournament2 = this.teamTournamentsList[x].id;
        }
      }
      this.matchService.postEventMatch(this.newMatch).subscribe(data => {
        console.log(data)
      });
      this.isShowConfirmation = true;
    }
  }

}
