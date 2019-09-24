import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './Componentes/login-page/login-page.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { ErrorPageComponent } from './Componentes/error-page/error-page.component';
import { RegisterPageComponent } from './Componentes/register-page/register-page.component';

const routes: Routes = [
{path: '', component: HomePageComponent},
{path: '', component: LoginPageComponent},
{path: '', component: RegisterPageComponent},
{path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
