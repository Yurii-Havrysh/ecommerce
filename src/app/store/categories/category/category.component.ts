import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreDataService } from '../../../core/store-data.service';
import {ProductsInterface} from '../../../core/interfaces';
import { CartService } from '../../../core/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute,
    private data : StoreDataService,
    private router: Router,
    private cartService: CartService
  ){}
  categoryArray:ProductsInterface[] = [];
  itemsPerPage = 5;
  currentPage = 1;
  sortItemsAsc() {
    this.categoryArray = this.categoryArray.sort((a, b):any => {
      return a.price - b.price
    })
  }
  sortItemsDesc() {
    this.categoryArray = this.categoryArray.sort((a, b):any => {
      return b.price - a.price 
    })
  }

  ngOnInit(): void {
    let idProduct:any = null;
    this.activatedRoute.params.forEach(param=> idProduct = param['product-id']);
    let categoryName = '';
    this.activatedRoute.params.subscribe(param => {categoryName = param['id'];
    });
    this.data.getCategory(categoryName).subscribe(res =>
      { this.categoryArray = res as any;
        this.categoryArray.forEach((a:any) => {
          Object.assign(a, {quantity: 1, total: a.price})
         })
      }
    );
  }

  showProductDesc(product: any) {
    this.data.getProducts().subscribe(res => { product = res} )
    this.router.navigate(['store/category', product.category, 'product-description', product.id]); 
  }

  goBack() {
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute})
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert(`${product.title} has been added to the cart!`);
  }
}

