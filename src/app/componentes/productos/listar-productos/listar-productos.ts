import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoService } from '../../../servicios/producto';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  templateUrl: './listar-productos.html',
  imports: [CommonModule]
})
export class ListarProductos implements OnInit {
  productos: any[] = [];
  rol: string | null = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol');
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.obtenerProductosLista().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al obtener productos', error);
      }
    });
  }

  esAdmin(): boolean {
    return this.rol === 'ADMIN';
  }

  navegarAgregar() {
    this.router.navigate(['/productos/agregar-productos']);
  }

  editarProducto(id: number): void {
    this.router.navigate(['/productos/editar-productos', id]);
  }

  eliminarProducto(id: number) {
    const confirmado = window.confirm('¿Estás seguro de que deseas eliminar este producto?');

    if(confirmado) {
    this.productoService.eliminarProducto(id).subscribe({
      next: () => {
      this.obtenerProductos();
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);
      }
    });
    }
  }
}
