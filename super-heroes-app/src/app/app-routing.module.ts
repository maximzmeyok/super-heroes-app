import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeroSelectionPageComponent } from './main/hero-selection-page/hero-selection-page.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginPageComponent },
  { path: 'sign-up', component: RegisterPageComponent },
  { path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'select', component: HeroSelectionPageComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
