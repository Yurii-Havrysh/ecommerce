import { Injectable } from '@angular/core';
import {ProductsInterface} from './interfaces'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  public items: ProductsInterface[] = [];
  public itemList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('')

  addToCart(product: ProductsInterface) {
    this.items.push(product);
    this.itemList.next(this.items);
    this.getTotalPrice();
    console.log(this.items);
    
  }
  getItems() {
    return this.itemList.asObservable();
  }
  getTotalPrice() : number {
    let grandTotal = 0;
    this.items.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal
  }
  clearCart() {
    this.items = [];
    return this.itemList.next(this.items);
  }
  removeItem(product: ProductsInterface) {
    this.items.map((a: any, index: any)=>{
      if(product.id === a.id){
        this.items.splice(index, 1);
      }
    });
    this.itemList.next(this.items) //updating amount of items here
  }
}
