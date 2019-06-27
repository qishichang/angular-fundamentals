import { Component, OnInit, ViewChild } from '@angular/core';
import { EventThumbnailComponent } from '../event-thumbnail/event-thumbnail.component';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClicked(name: string) {
    this.toastr.success(name);
  }
}
