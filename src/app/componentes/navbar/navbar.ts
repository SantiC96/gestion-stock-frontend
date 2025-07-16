import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html'
})

export class Navbar implements OnInit {
  rol: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol');
  }

  esAdmin(): boolean {
    return this.rol === 'ADMIN';
  }

  estaLogueado(): boolean {
    return this.rol !== null;
  }

  navegarAgregar(): void {
    this.router.navigate(['/productos/agregar-productos']);
  }

  navegarProductos(): void {
    this.router.navigate(['/productos']);
  }

  logout() {
    localStorage.removeItem('rol');
    window.location.href = '/login';
  }
}
