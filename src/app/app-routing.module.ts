import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newlogin', component: NewloginComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  //{ path: '**', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  LandingComponent,
  LoginComponent,
  DashboardComponent,
  NewloginComponent,
  PageNotFoundComponent]
  
