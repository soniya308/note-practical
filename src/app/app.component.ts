import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soniya-practical';

  loggedIn: boolean;

  constructor(public loginService: LoginService, public router: Router) {
    this.loggedIn = this.isLoggedIn();
  }

  public login() {
    this.loginService.setLogin = true;
    this.loggedIn = this.isLoggedIn();
    this.router.navigate(['./note']);
  }

  public logout() {
    this.loginService.setLogin = false;
    this.loggedIn = this.isLoggedIn();
    this.router.navigate(['./']);
  }

  public isLoggedIn() {
    return this.loginService.getLogin;
  }
}
