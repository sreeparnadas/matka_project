import { Injectable } from '@angular/core';

import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardAdminServiceService implements CanActivate {

  constructor(private authService: AuthService) { }

  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAdmin();
  }



}
