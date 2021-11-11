import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import  { NewMatchResult} from "../models/new-match-result";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchResultService {

  private eventsPath = "match-result";

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

  public postEventMatchResult(MatchResult: NewMatchResult){
    return this.http.post(environment.apiUrl+this.eventsPath, MatchResult);
  }

  public putIdEventMatchResult(id: string, MatchResult: NewMatchResult){
    return this.http.put(environment.apiUrl+this.eventsPath+'/'+id, MatchResult);
  }

  public deleteEventMatchResult(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/"+id);
  }
}
