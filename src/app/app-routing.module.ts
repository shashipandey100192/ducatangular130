import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './modules/layouts/blank/blank.component';
import { FullComponent } from './modules/layouts/full/full.component';




const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        component:BlankComponent,
        loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path:'dashboard',
        component:FullComponent,
        loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
