import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    loadChildren: ()=>import('./modules/welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    loadChildren: ()=>import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: ()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
