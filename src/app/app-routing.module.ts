import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './singleProduct/singleProduct.component';

const routes: Routes = [
  {path:'',component: ProductsComponent},
  {path:':pid',component: SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
