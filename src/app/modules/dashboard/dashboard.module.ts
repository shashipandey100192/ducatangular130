import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SalesComponent } from './sales/sales.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { MydatatableComponent } from './mydatatable/mydatatable.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    LandingpageComponent,
    SalesComponent,
    ApicomponentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule
  ],
})
export class DashboardModule { }
