import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"products",component:ProductComponent},
  {path: "", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
