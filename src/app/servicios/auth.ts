import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest {
  nombreUsuario: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private backendUrl = 'http://localhost:8080/gestionStock-app/api/login';

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<string> {
    return this.http.post(this.backendUrl, loginRequest, { responseType: 'text' });
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }
}
