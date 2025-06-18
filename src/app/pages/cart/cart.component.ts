import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe(products => {
      this.cartItems = products;
    });
  }

  updateQuantity(productId: number, cantidad: number) {
    this.cartService.updateQuantity(productId, cantidad).subscribe(() => {
      this.loadCart();
    });
  }

  incrementQuantity(productId: number) {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      const newQuantity = (item.quantity || 1) + 1;
      this.cartService.updateQuantity(productId, newQuantity).subscribe(() => {
        this.loadCart();
      });
    }
  }

  decrementQuantity(productId: number) {
    const item = this.cartItems.find(p => p.id === productId);
    if (item && (item.quantity || 1) > 1) {
      const newQuantity = (item.quantity || 1) - 1;
      this.cartService.updateQuantity(productId, newQuantity).subscribe(() => {
        this.loadCart();
      });
    }
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.loadCart();
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.loadCart();
    });
  }

  getTotal(): number {
    return this.cartItems.reduce((total, p) => total + p.price * (p.quantity || 1), 0);
  }
}