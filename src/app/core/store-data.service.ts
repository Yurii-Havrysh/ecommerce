import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsInterface } from './interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(private http: HttpClient) { }

  product:any

  public getProducts(): Observable<ProductsInterface[]>{
    return this.http.get<ProductsInterface[]>('https://fakestoreapi.com/products')
  }
  public getCategories(): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
  public getCategory(value:any): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/category/' + value)
  }
  public getProduct(id:number): Observable<ProductsInterface[]> {
    return this.http.get<ProductsInterface[]>('https://fakestoreapi.com/products/' + id)
  }
  }
  
