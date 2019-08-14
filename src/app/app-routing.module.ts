import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   // redirectTo: 'auth'
  // },
  // {
  //   path:'',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'auth',
  //       loadChildren: './auth/auth.module#AuthModule'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
