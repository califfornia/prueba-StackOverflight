import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (private router: Router){
  }

  menuValue: boolean = false;  // Set to false initially to hide menu
  showMenuIconClose: boolean = false;

  openMenu() {
    this.menuValue = !this.menuValue;
    this.showMenuIconClose = !this.showMenuIconClose;
  }
}
