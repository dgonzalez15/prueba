/**
 * Created by xavi on 2/17/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router,
              private storageService: AuthService) { }

  canActivate() {
    console.log(this.storageService.login());
    if (this.storageService.login()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
