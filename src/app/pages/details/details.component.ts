import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductoService } from '../../services/producto.service';
import { CartService } from '../../services/cart.service'; // ✅ importar

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route = inject(ActivatedRoute);
  productoService = inject(ProductoService);
  cartService = inject(CartService); // ✅ inyectar
  detalleProducto: Product | undefined;

  constructor() {
    const idProducto = Number(this.route.snapshot.params['id']);
    this.productoService.obtenerProductoPorId(idProducto).subscribe({
      next: (value) => { this.detalleProducto = value },
      error: (error) => console.log(error),
      complete: () => console.log('end')
    });
  }

  // ✅ función para añadir al carrito
  addToCart() {
  if (this.detalleProducto) {
    this.cartService.addToCart({ ...this.detalleProducto, quantity: 1 });
    alert('Producto añadido al carrito');
  }
}

}
