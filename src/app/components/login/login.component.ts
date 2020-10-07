import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    // this.router.navigate(['admin', { userName: 'kokos' }]);
    // this.router.navigate(['admin'], { queryParams: { userName: 'kokos' } });
    this.loginService.logIn();
  }

  logout() {
    this.loginService.logOff();
  }
}
