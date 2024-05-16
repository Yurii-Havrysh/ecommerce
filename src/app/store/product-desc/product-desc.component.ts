import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../core/store-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrl: './product-desc.component.css'
})
export class ProductDescComponent implements OnInit{
  product: any
  constructor(private data: StoreDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    let idProduct:any = null;
    this.activatedRoute.params.forEach(param=> idProduct = param['product-id']);
    this.data.getProduct(idProduct).subscribe(res=> {
      this.product = res as any;
       
          Object.assign(this.product, {quantity: 1, total: this.product.price})
    });
  }

  goBack() {
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute})
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert(`${product.title} has been added to the cart!`);
  }
}
