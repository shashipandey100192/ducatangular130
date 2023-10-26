import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistorpageComponent } from './registorpage/registorpage.component';

const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'registor',
    component:RegistorpageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
