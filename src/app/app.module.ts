import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { PageStartComponent } from './components/pages/page-start/page-start.component';
import { FormComponent } from './components/pages/form/form.component';
import { ConversionsComponent } from './components/pages/conversions/conversions.component';
import { CalculateDateComponent } from './components/pages/calculate-date/calculate-date.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    WelcomeComponent,
    PageStartComponent,
    FormComponent,
    ConversionsComponent,
    CalculateDateComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
