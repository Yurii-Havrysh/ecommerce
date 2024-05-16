import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { StoreDataService } from '../core/store-data.service';
import {ProductsInterface} from '../core/interfaces';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit{
  products: ProductsInterface[] = [];
  categories: string[] = []; 
  selectedCategory: any = [];
  itemsPerPage = 5;
  currentPage = 1;

  searchKey: string=''
  constructor(private data: StoreDataService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(){
    this.data.getProducts().subscribe(res => {
       this.products = res;
       this.products.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price})
       })
      });
    this.data.getCategories().subscribe(res => { this.categories = res});
    this.cartService.search.subscribe(value => {
      this.searchKey = value;
    })
  }

  onChange(value: any) {
    this.data.getCategory(value).subscribe( res => {this.selectedCategory = res });
    this.router.navigate(['store/category', value])
  }

  sortProductsDesc() {
    this.products = this.products.sort((a, b):any => {
      return a.price - b.price
    })
  }
  sortProductsAsc() {
    this.products = this.products.sort((a, b):any => {
      return b.price - a.price
    })
  }
  showProductDesc(product: any) {
    this.data.getProducts().subscribe(res => { product = res} )
    this.router.navigate(['store/product-description/', product.id]); 
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert(`${product.title} has been added to the cart!`);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * (this.itemsPerPage);
    const end = start + this.itemsPerPage;

    return this.products.slice(start,end)
  }
  get filteredArray() {
    if (this.searchKey === '') {
      return this.products;
    }
    const filteredArray = this.products.filter(e => e.title.trim().toLowerCase().includes(this.searchKey.toLowerCase()));
    return filteredArray;
   
  }
  changePage(page: number) {
    this.currentPage = page 
  }
  
  }

