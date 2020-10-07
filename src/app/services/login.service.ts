import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;

  constructor() {}

  public hasLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public logIn() {
    this.isLoggedIn = true;
  }

  public logOff() {
    this.isLoggedIn = false;
  }
}
