import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const rol = localStorage.getItem('rol');
    if (rol === 'ADMIN') {
      return true;
    }

    this.router.navigate(['/productos']);
    return false;
  }
}

