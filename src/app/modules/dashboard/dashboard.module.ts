import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SalesComponent } from './sales/sales.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MylocalComponent } from './mylocal/mylocal.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    SalesComponent,
    MylocalComponent,
    ParentComponent,
    ChildComponent,
    ApicomponentComponent,
    ViewdetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatTableModule,

   
  ],
})
export class DashboardModule { }
