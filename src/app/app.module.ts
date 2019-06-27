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
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list/events-list-resolver.service';


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
      RoutesRoutes
   ],
   providers: [
      ToastrService,
      EventService,
      EventRouteActivator,
      EventsListResolver,
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
