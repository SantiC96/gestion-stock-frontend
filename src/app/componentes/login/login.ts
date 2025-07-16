import { Component } from '@angular/core';
import { Auth } from '../../servicios/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class Login {
  loginRequest = {
      nombreUsuario: '',
      password: ''
    };

  mensajeError: string = '';

  constructor(private authService: Auth, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginRequest).subscribe({
      next: (rol) => {
        localStorage.setItem('rol', rol);
        window.location.href = '/productos';
      },
      error: () => {
        this.mensajeError = 'Usuario o contraseña incorrectos.';
      }
    });
  }
}
