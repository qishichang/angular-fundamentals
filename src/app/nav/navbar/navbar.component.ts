import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/user/shared';

@Component({
  selector: 'event-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
