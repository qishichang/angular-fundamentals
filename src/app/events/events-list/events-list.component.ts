import { Component, OnInit, ViewChild } from '@angular/core';
import { EventThumbnailComponent } from '../event-thumbnail/event-thumbnail.component';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService,
    private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClicked(name: string) {
    this.toastr.success(name);
  }
}
