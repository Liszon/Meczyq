import {Component, NgModule, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  /*
  user = {password:"password",
    email:"email"} ;
  isLoggedIn=false;

   */
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    /*
    this.isLoggedIn=this.authService.isLoggedIn()
    this.user = {
      email:"t@t3.pl",
      password:"test3test3",};

     */

  }


/*

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

 */

  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        email: this.f.email.value,
        password: this.f.password.value
      }
    )
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/secret-random-number']);
        }
      });
  }
}
