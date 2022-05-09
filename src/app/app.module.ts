import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { PageStartComponent } from './components/pages/page-start/page-start.component';
import { FormComponent } from './components/pages/form/form.component';
import { ConversionsComponent } from './components/pages/conversions/conversions.component';
import { CalculateDateComponent } from './components/pages/calculate-date/calculate-date.component';
import { AppProgressBarComponent } from './components/shared/app-progress-bar/app-progress-bar.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { AppErrorDialogComponent } from './components/shared/app-error-dialog/app-error-dialog.component';
import { AppInputDialogComponent } from './components/shared/app-input-dialog/app-input-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    WelcomeComponent,
    PageStartComponent,
    FormComponent,
    ConversionsComponent,
    CalculateDateComponent,
    AppProgressBarComponent,
    AppErrorDialogComponent,
    AppInputDialogComponent
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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents: [AppErrorDialogComponent, AppInputDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
