import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {
  NewTournament,
  PostData,
  PutName,
  PutSportsFacility,
  PutSportType,
  PutStartDateEndDate
} from "../models/new-tournament";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private eventsPath = "tournaments";

  constructor(private http: HttpClient) { }

  getEventTournament(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventTournament(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventTournament(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventTournament(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventTournament(tournament: PostData): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(tournament);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putEditNameEventTournament(id: string, tournament: PutName){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(tournament);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body, {'headers': headers});
  }

  putEditSportsFacilityEventTournament(id: string, tournament: PutSportsFacility){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(tournament);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body, {'headers': headers});
  }

  putEditSportTypeEventTournament(id: string, tournament: PutSportType){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(tournament);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body, {'headers': headers});
  }

  putEditDateEventTournament(id: string, tournament: PutStartDateEndDate){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(tournament);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body, {'headers': headers});
  }

  putEditTeamTournamentsEventTournament(id: string, tournament: string){
    const headers = { 'content-type': 'application/json'};
    //const body=JSON.stringify(tournament);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, tournament, {'headers': headers});
  }
}
