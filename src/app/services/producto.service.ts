import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'https://backt-8ll2.onrender.com/api/products';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  obtenerProductoPorId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  crearProducto(producto: Omit<Product, 'id' | 'rating'>): Observable<Product> {
    return this.http.post<Product>(this.url, producto);
  }

  actualizarProducto(id: number, producto: Omit<Product, 'id' | 'rating'>): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

