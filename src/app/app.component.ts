import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meczyq';
 isMenuVisible: boolean=false;

  onMenuToggle() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
