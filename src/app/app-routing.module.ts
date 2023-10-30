import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //dés que je charge l'app  -> charge page home
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:'users', loadChildren: () => import('./user-module/user-module.module').then(x => x.UserModuleModule)},
  {path:'products' , loadChildren: ()=>
  import('./product-module/product-module.module').then( m=> m.ProductModuleModule)},


  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
