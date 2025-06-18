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
  imagePreview: string | ArrayBuffer | null = null;

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
      image: ['', Validators.required], // Puede ser base64 o URL
      imageFile: [null] // Campo auxiliar para el archivo
    });
  }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.productForm.patchValue({ image: reader.result, imageFile: file });
      };
      reader.readAsDataURL(file);
    }
  }

  onImageUrlChange() {
    // Si el usuario escribe un link, borra el archivo y muestra preview
    this.productForm.patchValue({ imageFile: null });
    this.imagePreview = this.productForm.value.image;
  }

  onSubmit() {
  if (this.productForm.invalid) return;

  const productData = { ...this.productForm.value };
  delete productData.imageFile;
  productData.id = generateRandomId(); // Genera y asigna un id único

  this.productoService.crearProducto(productData).subscribe({
    next: () => {
      alert('Producto creado exitosamente');
      this.router.navigate(['/store']);
    },
    error: () => {
      alert('Error al crear producto');
    }
  });
}
}
function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000000);
}