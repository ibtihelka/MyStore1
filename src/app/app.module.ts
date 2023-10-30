import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyDirectiveDirective } from './my-directive.directive';
//import { ProductComponent } from './product-module/product/product.component';
//import { ErrorPageComponentComponent } from './error-page-component/error-page-component.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserService } from './Core/Services/user.service';
//import { UpdateUserComponent } from './user-module/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
