import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }
  
  obtenerProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  obtenerProductoPorId(id: number) {
    return this.http.get<Product>(this.url + '/' + id);
  }
}
