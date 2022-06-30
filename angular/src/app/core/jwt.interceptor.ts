import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, map, throwError, mapTo } from 'rxjs';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  authorizationHeader = 'Authorization';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): any {
    const token = localStorage.getItem('token');
    // Be careful not to overwrite an existing header of the same name.
    if (token !== null && !request.headers.has(this.authorizationHeader)) {
      request = request.clone({
        headers: request.headers.set(
          this.authorizationHeader,
          `Bearer ${token}`
        ),
      });
    }
    return next.handle(request) 
  }
}
