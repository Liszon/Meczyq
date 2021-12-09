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

  isLoggedIn = false;


  loginForm: FormGroup;
error:string;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
    this.error=''
  }

  ngOnInit(): void {

    this.isLoggedIn = this.authService.isLoggedIn()


  }


// onSubmit(): void
// {
//   console.log(this.user);
//   this.authService.login(this.user).subscribe(()=>window.location.reload());
// }
  logout(): void {
    this.authService.logout();
    window.location.reload();
  }


  get f() {
    return this.loginForm.controls;
  }

  async login() {

    const status=await this.authService.login(
      {
        email: this.f.email.value,
        password: this.f.password.value
      }
    )
    if (status==200) {

      //window.location.reload();
      this.router.navigate(['/home'])

    }
    else {
      this.error='Wrong email or password'

    }

  }


}
