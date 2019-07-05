import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'event-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginOverLogin = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
