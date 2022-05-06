import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ConversionsComponent } from './components/pages/conversions/conversions.component';
import { FormComponent } from './components/pages/form/form.component';
import { CalculateDateComponent } from './components/pages/calculate-date/calculate-date.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageStartComponent } from './components/pages/page-start/page-start.component';

const rutas: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', component: PageStartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component: WelcomeComponent },
    {path: 'conversions', component: ConversionsComponent },
    {path: 'form', component: FormComponent },
    {path: 'calculate-date', component: CalculateDateComponent },
    {path: '**', redirectTo: 'page-start'} //
  ];
@NgModule({
  imports: [RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
