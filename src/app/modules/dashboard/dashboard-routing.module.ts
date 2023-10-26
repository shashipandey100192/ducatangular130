import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SalesComponent } from './sales/sales.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { MydatatableComponent } from './mydatatable/mydatatable.component';
import { MylocalComponent } from './mylocal/mylocal.component';
import { ParentComponent } from './parent/parent.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';


const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'sales',
    component:SalesComponent
  },
  {
    path:'api',
    component:ApicomponentComponent
  },
  {
    path:'datatable',
    component:MydatatableComponent
  },
  {
    path:'localdata',
    component:MylocalComponent
  },
  {
    path:'parents',
    component:ParentComponent
  },
  {
    path:'api/:id',
    component:ViewdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
