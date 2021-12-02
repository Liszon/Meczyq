import { Component } from '@angular/core';
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meczyq';
 isMenuVisible: boolean=false;
  email;
  constructor(private authService: AuthService) {
    this.email=authService.getLoggedUser()

  }
  onMenuToggle() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
