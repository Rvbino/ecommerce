import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PrductListComponent } from './prduct-list/prduct-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'', component:PrductListComponent
  },

  {
    path:'products/:productId', component:ProductDetailsComponent
  },

  { 
    path: 'cart', component: CartComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
