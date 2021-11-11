import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { NewMatch} from "../models/new-match";


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private eventsPath = "match-result";

  constructor(private http: HttpClient) { }

  getEventMatch(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()
  }

  getCountEventMatch(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/count").toPromise()
  }

  getIdEventMatch(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/"+id).toPromise()
  }

  deleteEventMatch(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }

  postEventMatch(Match: NewMatch){
    return this.http.post(environment.apiUrl+this.eventsPath, Match);
  }

  putIdEventMatch(id: string, Match: NewMatch){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, Match);
  }
}
