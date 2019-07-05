import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
  cancel() {
    this.router.navigate(['events']);
  }

}
