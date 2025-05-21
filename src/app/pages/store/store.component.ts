import { Component, inject } from '@angular/core';
import { RedcircleComponent } from '../../elements/redcircle/redcircle.component';
import { ProductComponent } from '../../elements/product/product.component';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-store',
  imports: [RedcircleComponent, ProductComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  productoService: ProductoService = inject(ProductoService);
  listaDeProductos: Product[] = [];

  constructor () {
    this.productoService.obtenerProductos().subscribe({
      next: (value) => { this.listaDeProductos = value },
      error: (e) => console.log(e),
      complete: () => console.log('end') 
    })
  }
}
