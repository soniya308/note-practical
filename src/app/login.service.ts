import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    loggedIn: boolean;

    get getLogin(): boolean {
        return this.loggedIn;
    }

    set setLogin(val: boolean) {
        this.loggedIn = val;
    }
}