import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NewTournament} from "../models/new-tournament";


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

  postEventTournament(tournament: NewTournament){
    return this.http.post(environment.apiUrl+this.eventsPath, tournament);
  }

  putIdEventTournament(id: string, tournament: NewTournament){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, tournament);
  }
}
