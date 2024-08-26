import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  authenticate(username: string, password: string) {
    if (username === 'candy' && password === 'dummy') {
      if (isPlatformBrowser(this.platformId)) {
        sessionStorage.setItem('authenticatedUser', username);
      }
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      let user = sessionStorage.getItem('authenticatedUser');
      return !(user === null);
    }
    return false;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('authenticatedUser');
    }
  }
}
