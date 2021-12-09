import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EditDatePut, EditResultPut, NewMatch, NewMatchPost} from "../models/new-match";


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private eventsPath = "matches";

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

  postEventMatch(match: NewMatchPost){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(match);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  putIdEventMatch(id: string, match: NewMatch){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(match);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditDateEventMatch(id: string, date: EditDatePut){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(date);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  putEditResultEventMatch(id: string, result: EditResultPut){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(result);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

}
