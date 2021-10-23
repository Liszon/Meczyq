import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import {RouterModule} from "@angular/router";
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterpageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: 'home', component: IndexComponent},
      {path: 'login', component: LoginpageComponent},
      {path: 'register', component: RegisterpageComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
