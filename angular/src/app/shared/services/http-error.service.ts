import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, EMPTY, first, last, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe( 
      catchError(x=> this.handleAuthError(x))
    );
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
 console.log(err);
   
    return EMPTY;
}
}
