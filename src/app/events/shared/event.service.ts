import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvent, ISession } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handelError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handelError<IEvent>('getEvent')));
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    const headers = {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<IEvent>('/api/events', event, headers)
      .pipe(catchError(this.handelError<IEvent>('saveEvent')));
  }

  searchSessions(searchTerm: string) {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handelError<ISession[]>('searchSessions')));
  }

  private handelError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
