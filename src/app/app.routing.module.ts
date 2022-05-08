import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ConversionsComponent } from './components/pages/conversions/conversions.component';
import { FormComponent } from './components/pages/form/form.component';
import { CalculateDateComponent } from './components/pages/calculate-date/calculate-date.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageStartComponent } from './components/pages/page-start/page-start.component';
import { AuthGuard } from './core/guards/auth.guard';

const rutas: Routes = [
    {path: '', redirectTo: 'page-start', pathMatch: 'full'},
    {path: 'page-start', component: PageStartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', canActivate: [AuthGuard], component: WelcomeComponent },
    {path: 'conversions', canActivate: [AuthGuard], component: ConversionsComponent },
    {path: 'form', canActivate: [AuthGuard], component: FormComponent },
    {path: 'calculate-date',canActivate: [AuthGuard], component: CalculateDateComponent },
    {path: '**', redirectTo: 'page-start'}
  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
