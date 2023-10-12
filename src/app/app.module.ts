import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FullComponent } from './modules/layouts/full/full.component';
import { BlankComponent } from './modules/layouts/blank/blank.component';
import { MysidebarComponent } from './modules/shares/mysidebar/mysidebar.component';
import { MyfooterComponent } from './modules/shares/myfooter/myfooter.component';
import { MynavbarComponent } from './modules/shares/mynavbar/mynavbar.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    MysidebarComponent,
    MyfooterComponent,
    MynavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
