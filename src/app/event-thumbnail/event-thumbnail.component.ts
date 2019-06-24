import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  someProperty = 'some value';

  constructor() { }

  ngOnInit() {
  }

  handelClickMe() {
    console.log('clicked');
    this.eventClick.emit('foo');
  }

  logFoo() {
    console.log('foo');
  }
}
