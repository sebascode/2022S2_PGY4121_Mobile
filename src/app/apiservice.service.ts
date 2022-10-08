import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUri = `https://pokeapi.co/api/v2`;

  constructor(private client : HttpClient) { }

  getPokemon() : Observable<any>{
    return this.client.get(`${this.baseUri}/pokemon/ditto`)
    .pipe(
      tap(_ => console.log(`User fetched: ditto`)),
      catchError(this.handleError<any[]>(`Get user id=ditto`))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}