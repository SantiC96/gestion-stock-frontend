import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const rol = localStorage.getItem('rol');

    if (rol === 'ADMIN' || rol === 'USER') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

