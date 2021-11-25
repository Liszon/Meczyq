import { Component, OnInit } from '@angular/core';
import {TournamentService} from "../../core/services/tournament.service";
import {TeamService} from "../../core/services/team.service";
import {Tournament} from "../../core/models/tournament";
import {Team} from "../../core/models/team";
import {UsersPermissionUser} from "../../core/models/users-permission-user";
import {UserPermissionsUserService} from "../../core/services/user-permissions-user.service";

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
  tournamentsList2: Tournament[] = [];
  teamslist: Team[] = [];
  isShowAddConfirmation = false;
  isShowRemoveConfirmation = false;
  isShowNoContent = false;
  isShowContent = false;
  isShowInitial = true;
  isShowADD = false;
  isShowRemove = false;
  userMe: any;


  constructor(private tournamentService: TournamentService, private teamService: TeamService,
              private userPermUserService: UserPermissionsUserService) {
    this.id = '';
    this.idTeam = '';
    this.idRemove = '';
    this.idTeamRemove = '';
  }

  ngOnInit(): void {
    this.tournamentService.getEventTournament().then(res => this.tournamentsList = res as Tournament[]);
    this.teamService.getEventTeam().then(res => this.teamslist = res as Team[]);
    this.userPermUserService.getUsersMeEventUserPermissionsUser().then(res => this.userMe = res as UsersPermissionUser);
  }

  showAdd()
  {
    if(!this.isShowRemove)
    {
      this.findUserGames();
      this.showContent();
    }
    this.isShowADD = true;
    if (this.isShowContent && this.isShowADD && this.isShowRemove)
    {
      this.isShowInitial = false;
    }
  }

  showRemove()
  {
    if (!this.isShowADD)
    {
      this.findUserGames();
      this.showContent();
    }
    this.isShowRemove = true;
    if (this.isShowContent && this.isShowADD && this.isShowRemove)
    {
      this.isShowInitial = false;
    }
  }

  showContent(){

    if(this.tournamentsList2.length != 0)
    {
      this.isShowContent = true;
    } else
    {
      this.isShowNoContent = true;
    }
  }

  findUserGames(){
    let x;

    for(x=0; x<this.tournamentsList.length; x++)
    {
      if(this.userMe.id == this.tournamentsList[x].organizer.id)
      {
        this.tournamentsList2.push(this.tournamentsList[x]);
      }
    }
  }

  showConfirmationADD(){
    this.isShowAddConfirmation = true;
  }

  showConfirmationRemove(){
    this.isShowRemoveConfirmation = true;
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
    });
    this.showConfirmationRemove();
  }

}
