import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {


  isLoggedIn=false;


  registerForm: FormGroup;


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router ) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {

    this.isLoggedIn=this.authService.isLoggedIn()


  }




  logout():void
  {
    this.authService.logout();
    window.location.reload();
  }



  get f() { return this.registerForm.controls; }

  register() {
    this.authService.register(
      {
        email: this.f.email.value,
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
      .subscribe(success => {
        if (success) {
          window.location.reload();
        }
      });
  }


}
