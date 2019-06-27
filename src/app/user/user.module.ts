import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutes } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    UserRoutes
  ],
  declarations: [
    ProfileComponent
  ]
})
export class UserModule { }
