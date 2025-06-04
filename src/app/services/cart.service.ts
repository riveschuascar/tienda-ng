import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cart = this.cart.map(p =>
      p.id === productId ? { ...p, quantity: quantity } : p
    );
    this.cartSubject.next(this.cart);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([]);
  }
  getCartItem(id: number): Product | undefined {
    return this.cart.find(p => p.id === id);
  }
}


