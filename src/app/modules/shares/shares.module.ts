import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesRoutingModule } from './shares-routing.module';
import { NavbarpageComponent } from './navbarpage/navbarpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterpageComponent } from './footerpage/footerpage.component';


@NgModule({
  declarations: [
    NavbarpageComponent,
    SidebarComponent,
    FooterpageComponent
  ],
  imports: [
    CommonModule,
    SharesRoutingModule
  ]
})
export class SharesModule { }
