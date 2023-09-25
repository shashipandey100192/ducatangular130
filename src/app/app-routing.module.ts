import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyerrorpageComponent } from './myerrorpage/myerrorpage.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
{
  path:'',
  component: LandingpageComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'contact',
  component:ContactusComponent
},
{
  path:'myform',
  component:UserformComponent
},
{
  path:'**',
  component:MyerrorpageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
