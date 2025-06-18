import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/cart';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos del carrito
  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Agregar un producto al carrito
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Actualizar la cantidad de un producto
  updateQuantity(productId: number, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${productId}`, { quantity });
  }

  // Eliminar un producto del carrito
  removeFromCart(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }

  // Vaciar el carrito
  clearCart(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  // Obtener un producto por ID (si lo necesitas)
  getCartItem(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}`);
  }
}
