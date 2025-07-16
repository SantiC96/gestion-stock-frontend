import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../modelos/producto';
import { ProductoService } from '../../../servicios/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-productos.html'
})
export class EditarProductos implements OnInit {
  producto: Producto = {
    nombreProducto: '',
    precio: 0,
    stock: 0,
    categoria: ''
  };

  constructor(
    private ruta: ActivatedRoute,
    private productoService: ProductoService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.productoService.obtenerProductoPorId(id).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (error) => {
        console.error('Error al obtener producto:', error);
      }
    });
  }

  actualizarProducto(): void {
    console.log('Botón guardar presionado');
    if (this.producto.idProducto != null) {
      this.productoService.editarProducto(this.producto.idProducto, this.producto).subscribe({
        next: () => {
          this.router.navigate(['/productos']);
        },
        error: (err) => {
          console.error('Error al actualizar producto:', err);
        }
      });
    }
  }
}