import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'candy';
  password = 'dummy';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  constructor(private router: Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService
  ) {}

  handleLogin() {
    // if (this.username === 'candy' && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
