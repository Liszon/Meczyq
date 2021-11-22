import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AuthService } from './services/auth.service';

import { TokenInterceptor } from './token.interceptor';
import {LoginGuard} from "./guards/login.guard";

@NgModule({
  declarations: [LoginComponent],
  providers: [
    LoginGuard,
    AuthService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
