import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment} from "src/environments/environment";
import { NewUploadFile} from "../models/new-upload-file";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private eventsPath = "upload";

  constructor(private http: HttpClient) { }

  getEventUploadFile(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/files").toPromise()
  }

  getCountEventUploadFile(){
    return this.http.get(environment.apiUrl+this.eventsPath+"/files/count").toPromise()
  }

  getIdEventUploadFile(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/fiels/"+id).toPromise()
  }

  getSearchUploadFile(id: string){
    return this.http.get(environment.apiUrl+this.eventsPath+"/search/"+id).toPromise()
  }

  deleteEventUploadFile(id: string){
    return this.http.delete(environment.apiUrl+this.eventsPath+"/fiels/"+id);
  }

  postEventUploadFile(file: NewUploadFile){
    return this.http.post(environment.apiUrl+this.eventsPath, file);
  }
}
