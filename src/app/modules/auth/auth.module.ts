import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistorpageComponent } from './registorpage/registorpage.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    RegistorpageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
