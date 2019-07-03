import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']
    );
  }

}
