import { Component, OnInit} from '@angular/core';
import { ProductsInterface } from '../../core/interfaces';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public products: ProductsInterface[] = [];
  public grandTotal : number;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getItems().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice()
    });
  }
  removeProduct(product: any) {
    this.cartService.removeItem(product)
  }
  clearCart(){
    this.cartService.clearCart()
  }
}
