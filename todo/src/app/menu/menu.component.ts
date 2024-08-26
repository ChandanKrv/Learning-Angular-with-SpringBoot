import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {

  isUserLoggedIn: boolean = false;



  constructor(public hardcodedAuthenticationService
    : HardcodedAuthenticationService) {
    this.isUserLoggedIn=hardcodedAuthenticationService.isUserLoggedIn()
    }
}
