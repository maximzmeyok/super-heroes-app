import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BattlePageComponent } from './main/battle-page/battle-page.component';
import { HeroSelectionPageComponent } from './main/hero-selection-page/hero-selection-page.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { UserInfoPageComponent } from './main/user-info-page/user-info-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './shared/auth.guard';
import { BattleGuard } from './shared/battle.guard';
import { HeroInfoPageComponent } from './shared/components/hero-info-page/hero-info-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginPageComponent },
  { path: 'sign-up', component: RegisterPageComponent },
  { path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    { path: 'select', component: HeroSelectionPageComponent },
    { path: 'info', component: UserInfoPageComponent },
    { path: 'hero/:id', component: HeroInfoPageComponent },
    { path: 'battle', component: BattlePageComponent, canActivate: [BattleGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
