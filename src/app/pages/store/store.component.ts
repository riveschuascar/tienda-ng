import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ProductComponent } from '../../elements/product/product.component';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';  // ← Corrección aquí

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductComponent, RouterModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']  // ← También corregido
})
export class StoreComponent implements OnInit {
  productoService = inject(ProductoService);
  cartService = inject(CartService);  // ← Ya está bien tipado
  router = inject(Router);
  listaDeProductos: Product[] = [];

  ngOnInit() {
    this.cargarProductos();

    // Se asegura de actualizar la vista al volver a esta ruta
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if ((event as NavigationEnd).url === '/store') {
        this.cargarProductos();
      }
    });
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe({
      next: (value) => { this.listaDeProductos = value },
      error: (e) => console.log(e),
      complete: () => console.log('end')
    });
  }

 eliminarProducto(id: number) {
  if (!id) {
    alert('ID inválido');
    return;
  }
  this.productoService.eliminarProducto(id).subscribe({
    next: () => {
      alert('Producto eliminado');
      this.cargarProductos();
    },
    error: () => alert('No se pudo eliminar el producto')
  });
}

  addToCart(product: Product) {
  this.cartService.addToCart(product).subscribe({
    next: () => {
      alert('Producto agregado al carrito');
    },
    error: () => {
      alert('No se pudo agregar el producto al carrito');
    }
  });
}
}
