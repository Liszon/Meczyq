import {Component, NgModule, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  user = {password:"password",
    email:"email"} ;
  isLoggedIn=false;
  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
    this.isLoggedIn=this.authService.isLoggedIn()
    this.user = {
      email:"t@t3.pl",
      password:"test3test3",};

  }




onSubmit(): void
{
  console.log(this.user);
  this.authService.login(this.user).subscribe(()=>window.location.reload());
}
logout():void
{
  this.authService.logout();
  window.location.reload();
}
}
