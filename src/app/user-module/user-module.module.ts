import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { User } from './user';
import { UserModuleRoutingModule } from './user-module-routing.module';


@NgModule({
  declarations: [
    ListUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule
  ],
  providers: [
    UserModuleModule
  ]
})
export class UserModuleModule { }
