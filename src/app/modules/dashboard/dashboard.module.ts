import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SalesComponent } from './sales/sales.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';





@NgModule({
  declarations: [
    LandingpageComponent,
    SalesComponent,
    ApicomponentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
