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
   this.detalleProducto = this.productoService.obtenerProductoPorId(idProducto)
   console.log(this.detalleProducto)
 }
}
