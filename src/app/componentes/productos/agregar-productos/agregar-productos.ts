import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../servicios/producto';

@Component({
  selector: 'app-agregar-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-productos.html'
})
export class AgregarProductos {

  producto = {
    nombreProducto: '',
    precio: 0,
    stock: 0,
    categoria: ''
};

constructor(
    private productoService: ProductoService,
    public router: Router
  ) {}
  
  guardarProducto(): void {
    this.productoService.agregarProducto(this.producto).subscribe({
      next: () => {
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        console.error('Error al guardar producto:', error);
      }
    });
  }
}
