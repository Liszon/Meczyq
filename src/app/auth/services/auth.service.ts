import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment} from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  private _loggedUser: string | null;

  constructor(private http: HttpClient) {
    this._loggedUser=null;
  }

  async login(user: { email: string, password: string }) {
    let statusCode=200;
    let observable= await this.http.post<any>(`${environment.apiUrl}auth/local`, {
       "identifier": user.email,

       "password":  user.password
     }) .toPromise()

      .then(res => {
        console.log(res)
        this.doLoginUser(res.user.email,res.jwt )

      }).catch(res => {
        statusCode=res.status;
        console.log(res.status)});


    return statusCode ;

  }
  async register(user: { email: string, username: string, password: string }) {

    let statusCode=200;
    let observable=await this.http.post<any>(`${environment.apiUrl}auth/local/register`, {

      "username": user.username,
      "email": user.email,

      "password":  user.password
    }) .toPromise()

      .then(res => {
        this.doLoginUser(res.user.email,res.jwt )

      }).catch(res => {
        statusCode=res.status;
        console.log(res.status)});


    return statusCode ;

  }
  logout() {
    this._loggedUser = null;
    this.removeToken();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }



  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN) ;
  }

  private doLoginUser(email: string, token:string) {
    this._loggedUser = email;
    this.storeJwtToken(token);
    this.storeLoggedUser(email);

    console.log(this.isLoggedIn())
  }


  getLoggedUser() {
    return localStorage.getItem("USER") ;
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  private storeLoggedUser(email: string) {
    localStorage.setItem("USER", email);
  }


  private removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem("USER");
  }


}
