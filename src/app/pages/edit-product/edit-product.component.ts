import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  productForm: FormGroup;
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });

    // Obtener ID del producto desde la URL
    this.productId = Number(this.route.snapshot.params['id']);

    // Cargar datos del producto y prellenar el formulario
    this.productoService.obtenerProductoPorId(this.productId).subscribe({
      next: (producto: Product) => {
        this.productForm.patchValue({
          title: producto.title,
          price: producto.price,
          description: producto.description,
          category: producto.category,
          image: producto.image
        });
      },
      error: () => alert('No se pudo cargar el producto')
    });
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    this.productoService.actualizarProducto(this.productId, this.productForm.value).subscribe({
      next: () => {
        alert('Producto actualizado');
        this.router.navigate(['/store']);
      },
      error: () => alert('Error al actualizar')
    });
  }
}
