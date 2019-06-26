import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesRoutes } from './routes.routing';
import { ToastrService } from './common/toastr.service';

import { NavbarComponent } from './nav/navbar/navbar.component';

import { EventService } from './events/shared/event.service';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';


@NgModule({
   declarations: [
      NavbarComponent,
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      EventDetailsComponent
   ],
   imports: [
      BrowserModule,
      RoutesRoutes
   ],
   providers: [
      EventService,
      ToastrService
   ],
   bootstrap: [
      EventsAppComponent
   ]
})
export class AppModule { }
