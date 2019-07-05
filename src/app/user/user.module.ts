import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import {
  ProfileComponent,
  LoginComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
