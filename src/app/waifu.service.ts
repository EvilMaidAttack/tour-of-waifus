import { MessageService } from './message.service';
import { Waifu } from './waifu';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WaifuService {
  private waifusUrl = 'api/waifus';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getWaifu(id: number): Observable<Waifu> {
    const url = `${this.waifusUrl}/${id}`;
    return this.http.get<Waifu>(url).pipe(
      tap((_) => this.log(`fetched waifu id=${id}`)),
      catchError(this.handleError<Waifu>('getWaifu'))
    );
  }

  /** GET heroes from the server */
  getWaifus(): Observable<Waifu[]> {
    return this.http.get<Waifu[]>(this.waifusUrl).pipe(
      tap((_) => this.log('fetched waifus')),
      catchError(this.handleError<Waifu[]>('getWaifus', []))
    );
  }

  private log(message: string): void {
    this.messageService.add(`WaifuService: ${message}`);
  }

  updateWaifu(waifu: Waifu): Observable<any> {
    return this.http.put(this.waifusUrl, waifu, this.httpOptions).pipe(
      tap((_) => this.log(`updated waifu id=${waifu.id}`)),
      catchError(this.handleError<any>('updateWaifu'))
    );
  }

  addWaifu(waifu: Waifu): Observable<Waifu> {
    return this.http.post(this.waifusUrl, waifu, this.httpOptions).pipe(
      tap((newWaifu: Waifu) => this.log(`added waifu w/ id=${newWaifu.id}`)),
      catchError(this.handleError<Waifu>('addWaifu'))
    );
  }

  deleteWaifu(waifu: Waifu | number): Observable<Waifu> {
    const id = typeof waifu === 'number' ? waifu : waifu.id;
    const url = this.waifusUrl + '/' + id;

    return this.http.delete<Waifu>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Waifu>('deleteHero'))
    );
  }

  searchWaifus(term: string) {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Waifu[]>(`${this.waifusUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found ${x.length} waifus matching "${term}"`)
          : this.log(`no waifus found matching "${term}"`)
      ),
      catchError(this.handleError<Waifu[]>('searchWaifu', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
