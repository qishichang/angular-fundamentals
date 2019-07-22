import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/404/404.component';

import {
  EventsListComponent,
  EventsListResolver,
  EventDetailsComponent,
  CreateEventComponent,
  EventResolver,
  CreateSessionComponent,
} from './events';

const routes: Routes = [
  { path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver} },
  { path: 'events/session/create', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}


