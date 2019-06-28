import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { EventsRoutingModule } from './events-routing.module';

import { NavbarComponent } from './nav/navbar/navbar.component';

import { EventsAppComponent } from './events-app.component';

import { Error404Component } from './errors/404/404.component';

import {
   EventsListComponent,
   EventThumbnailComponent,
   EventDetailsComponent,
   CreateEventComponent,
} from './events';

@NgModule({
   declarations: [
      Error404Component,
      NavbarComponent,
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      EventDetailsComponent,
      CreateEventComponent
   ],
   imports: [
      BrowserModule,
      CoreModule,
      EventsRoutingModule
   ],
   providers: [
      { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
   ],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
   if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
   }

   return true;
}
