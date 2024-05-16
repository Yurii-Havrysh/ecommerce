import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './store/categories/category/category.component';
import { StoreComponent } from './store/store.component';
import { ProductDescComponent } from './store/product-desc/product-desc.component';
import { CartComponent } from './store/cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: 'store', pathMatch: 'full'},
  {path: 'store', component: StoreComponent},
  {path: 'store/category/:id', component: CategoryComponent},
  {path: 'store/category/:id/product-description/:product-id', component: ProductDescComponent},
  {path: 'store/product-description/:product-id', component: ProductDescComponent},
  {path: 'store/cart', component: CartComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
