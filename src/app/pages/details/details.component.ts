import { Component, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../interfaces/product";
import { ProductoService } from '../../services/producto.service';


@Component({
 selector: 'app-details',
 standalone: true,
 imports: [],
 templateUrl: './details.component.html',
 styleUrl: './details.component.scss'
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 productoService: ProductoService = inject(ProductoService);
 detalleProducto: Product | undefined;
 constructor() {
   const idProducto = Number(this.route.snapshot.params['id']);
   this.productoService.obtenerProductoPorId(idProducto).subscribe({
    next: (value) => { this.detalleProducto = value },
    error: (error) => console.log(error),
    complete: () => console.log('end')
   })
   console.log(this.detalleProducto)
 }
}
