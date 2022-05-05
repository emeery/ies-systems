import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../components/pages/welcome/welcome.component';
import { ConversionsComponent } from '../components/pages/conversions/conversions.component';
import { FormComponent } from '../components/pages/form/form.component';
import { CalculateDateComponent } from '../components/pages/calculate-date/calculate-date.component';
import { LoginComponent } from '../components/auth/login/login.component';

const rutas: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent },
    {path: 'conversions', component: ConversionsComponent },
    {path: 'form', component: FormComponent },
    {path: 'calculate-date', component: CalculateDateComponent },
    {path: '**', redirectTo: 'welcome'} //
  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
