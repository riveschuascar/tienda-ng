import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productoService = inject(ProductoService);
  cartService = inject(CartService);
  productosDestacados: Product[] = [];

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe({
      next: productos => this.productosDestacados = productos.slice(0, 2),  // Puedes usar filtro si quieres destacar según precio, categoría, etc.
      error: e => console.error(e)
    });
  }

  addToCart(producto: Product) {
    this.cartService.addToCart(producto);
    alert('Producto agregado al carrito');
  }
}




