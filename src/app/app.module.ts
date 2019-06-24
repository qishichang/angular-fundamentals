import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';


@NgModule({
   declarations: [
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }
