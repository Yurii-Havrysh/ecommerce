import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { ProductsInterface } from '../../core/interfaces';
import { StoreDataService } from '../../core/store-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  public totalItems: number = 0;
  public searchItem: string;
  products: ProductsInterface[] = [];
  constructor(private cartService: CartService,
    private data: StoreDataService
  ) {}

  ngOnInit(): void {
    this.cartService.getItems().subscribe(res=>{
      this.totalItems = res.length;
    })
  }
  search(event:any) {
    
    this.searchItem = (event?.target as HTMLInputElement).value;
    console.log(this.searchItem);
    this.cartService.search.next(this.searchItem);
  }
  }

