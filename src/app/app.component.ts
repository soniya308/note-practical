import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteDetail } from './note/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soniya-practical';

  loggedIn: boolean;

  folders: NoteDetail[] = [
    {
      title: 'Test Title 1',
      body: 'Test Body A',
      id: 1
    },
    {
      title: 'Test Title 2',
      body: 'Test Body B',
      id: 2
    }
  ];

  constructor(public router: Router) {
    this.loggedIn = JSON.parse(localStorage.getItem('login'));
    if(this.loggedIn) {
      this.login();
    }
  }

  ngOnInit() {
    if(!JSON.parse(localStorage.getItem('notes'))) {
      localStorage.setItem('notes', JSON.stringify(this.folders));
    }
  }

  public login() {
    this.loggedIn = true;
    localStorage.setItem('login', JSON.stringify(true));
    this.router.navigate(['./note']);
  }

  public logout() {
    this.loggedIn = false;
    localStorage.setItem('login', JSON.stringify(false));
    this.router.navigate(['./']);
  }

}
