import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private eventsPath = "upload";

  constructor(private http: HttpClient) { }

  getEventUploadFile(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/files");
  }

  getCountEventUploadFile(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/files/count");
  }

  getIdEventUploadFile(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/fiels/"+{id});
  }

  getSearchUploadFile(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/search/"+{id});
  }

  deleteEventUploadFile(id: string){
    this.http.delete(environment.apiUrl+this.eventsPath+"/fiels/"+{id});
    return console.log("Usunięto plik o id: "+{id});
  }
}
