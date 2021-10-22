import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './bar/components/start/start.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {AuthGuard} from './shared/services/auth.guard';


const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'home', component: StartComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
