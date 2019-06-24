import { Component, OnInit, ViewChild } from '@angular/core';
import { EventThumbnailComponent } from '../event-thumbnail/event-thumbnail.component';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/asserts/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  @ViewChild(EventThumbnailComponent)
 private thumbnail: EventThumbnailComponent;

  constructor() { }

  ngOnInit() {
  }

  handleEventClicked(data) {
    console.log(data);
  }

  handleClick() {
    console.log('click: ' + this.thumbnail.someProperty);
  }

}
