import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule
  ]
})
export class ProductModuleModule { }
