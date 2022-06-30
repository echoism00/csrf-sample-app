import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { iif, Observable, of, switchMap, catchError } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated().pipe(
      switchMap((isAuthenticated) => {
        console.log(isAuthenticated);
        return isAuthenticated
          ? of(this.router.createUrlTree(['/home']))
          : of(true);
      })
    );
    // const token = localStorage.getItem('token');

    // console.log('asdasd');
    // if (token) {
    //   this.router.navigateByUrl('/home');
    //   return false;
    // }
    // return true;
  }
}
