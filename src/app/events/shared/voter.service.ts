import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ISession } from './';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const headers = {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(url, {}, headers)
      .pipe(catchError(this.handelError('addVoter')))
      .subscribe();

  }

  private handelError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
