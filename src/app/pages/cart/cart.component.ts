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
  cartItems: Product[] = []; // 🔄 ahora se llama cartItems para coincidir con el HTML

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(products => {
      this.cartItems = products;
    });
  }

  onCantidadCambiada(event: Event, productId: number) {
    const input = event.target as HTMLInputElement;
    const cantidad = parseInt(input.value, 10);
    this.updateQuantity(productId, isNaN(cantidad) ? 1 : cantidad);
  }

  updateQuantity(productId: number, cantidad: number) {
    this.cartService.updateQuantity(productId, cantidad);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, p) => total + p.price * (p.quantity || 1), 0);
  }
  incrementQuantity(productId: number) {
  const item = this.cartItems.find(p => p.id === productId);
  if (item) {
    const newQuantity = (item.quantity || 1) + 1;
    this.cartService.updateQuantity(productId, newQuantity);
  }
}

decrementQuantity(productId: number) {
  const item = this.cartItems.find(p => p.id === productId);
  if (item && (item.quantity || 1) > 1) {
    const newQuantity = (item.quantity || 1) - 1;
    this.cartService.updateQuantity(productId, newQuantity);
  }
}
clearCart() {
  this.cartService.clearCart();
}


}
