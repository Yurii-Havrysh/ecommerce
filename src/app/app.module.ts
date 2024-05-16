import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { CategoryComponent } from './store/categories/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDescComponent } from './store/product-desc/product-desc.component';
import { PaginationComponent } from './store/pagination/pagination.component';
import { HeaderComponent } from './store/header/header.component';
import { CartComponent } from './store/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CategoryComponent,
    ProductDescComponent,
    PaginationComponent,
    HeaderComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
