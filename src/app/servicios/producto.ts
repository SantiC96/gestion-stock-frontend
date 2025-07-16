import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:8080/gestionStock-app/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductosLista(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url)
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  obtenerProductoPorId(id: number){
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  editarProducto(id: number, producto: Producto){
    return this.http.put(`${this.url}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
