import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Componentes/login-page/login-page.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { RegisterPageComponent } from './Componentes/register-page/register-page.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { NotFoundPageComponent } from './Componentes/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './Componentes/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    RegisterPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
