import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import  { NewMatchResult} from "../models/new-match-result";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

  private eventsPath = "match-results";

  constructor(private http: HttpClient) { }

  public getEventMatchResult(){
    return this.http.get(environment.apiUrl+this.eventsPath).toPromise()

  }

  public getCountEventMatchResult(){
    return this.http.get(environment.apiUrl+this.eventsPath+'/count').toPromise()
  }

  public getIdEventMatchResult(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+'/'+ id).toPromise()
  }

  public postEventMatchResult(matchResult: NewMatchResult){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(matchResult);
    return this.http.post(environment.apiUrl+this.eventsPath, body,{'headers': headers});
  }

  public putIdEventMatchResult(id: string, matchResult: NewMatchResult){
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(matchResult);
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, body,{'headers': headers});
  }

  public deleteEventMatchResult(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }
}
