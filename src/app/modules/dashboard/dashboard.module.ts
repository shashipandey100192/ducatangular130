import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SalesComponent } from './sales/sales.component';
import { ApicomponentComponent } from './apicomponent/apicomponent.component';
import { MydatatableComponent } from './mydatatable/mydatatable.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { NgFor } from '@angular/common';
import { MylocalComponent } from './mylocal/mylocal.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    SalesComponent,
    MylocalComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    ApicomponentComponent,
    NgFor
  ],
})
export class DashboardModule { }
