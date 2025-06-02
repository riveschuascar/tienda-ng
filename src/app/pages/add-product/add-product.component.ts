import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
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
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    this.productoService.crearProducto(this.productForm.value).subscribe({
      next: () => {
        alert('Producto creado exitosamente');
        // Truco: navegar a '' sin cambiar la URL, luego a /store
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/store']);
        });
      },
      error: () => {
        alert('Error al crear producto');
      }
    });
  }
}
