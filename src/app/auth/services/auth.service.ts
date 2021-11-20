import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  private loggedUser: string | null;

  constructor(private http: HttpClient) {
    this.loggedUser=null;
  }

  login(user: { email: string, password: string }) {
    let observable= this.http.post<any>(`${environment.apiUrl}auth/local`, {
       "identifier": user.email,

       "password":  user.password
     }) ;

    observable.subscribe(res => this.doLoginUser(res.user.email,res.jwt ))
    return observable;

  }

  logout() {
    this.loggedUser = null;
    this.removeToken();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }



  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN) ;
  }

  private doLoginUser(email: string, token:string) {
    this.loggedUser = email;
    this.storeJwtToken(token);
  }




  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }



  private removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);

  }
}
