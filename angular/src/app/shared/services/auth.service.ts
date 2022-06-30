import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, of, mapTo } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.getUser().pipe( catchError((error: any) => {
      let a = '';
      if (error.error instanceof ErrorEvent) {
        a = `Error: ${error.error.message}`;
      } else {
        a = `Error: ${error.message}`;
      }
      return of(false);
    }),
      map((user) => { 
        return user !== null;
      })
    );
  }

  getUser(): Observable<any> {
    return this.http.get('http://localhost:8000/api/user').pipe(
      catchError((error: any) => {
        let a = '';
        if (error.error instanceof ErrorEvent) {
          a = `Error: ${error.error.message}`;
        } else {
          a = `Error: ${error.message}`;
        }
        return of([]);
      })
    );
  }
}
