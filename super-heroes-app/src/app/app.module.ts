import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthService } from './shared/services/auth.service';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/auth.guard';
import { HeroSelectionPageComponent } from './main/hero-selection-page/hero-selection-page.component';
import { HeroesService } from './shared/services/heroes.service';
import { HeroCardComponent } from './shared/components/hero-card/hero-card.component';
import { AlphabeticalSelectComponent } from './main/hero-selection-page/alphabetical-select/alphabetical-select.component';
import { UserInfoPageComponent } from './main/user-info-page/user-info-page.component';
import { HeroesListComponent } from './main/user-info-page/heroes-list/heroes-list.component';
import { BattlesHistoryComponent } from './main/user-info-page/battles-history/battles-history.component';
import { PowerUpsComponent } from './main/user-info-page/power-ups/power-ups.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainLayoutComponent,
    HeroSelectionPageComponent,
    HeroCardComponent,
    AlphabeticalSelectComponent,
    UserInfoPageComponent,
    HeroesListComponent,
    BattlesHistoryComponent,
    PowerUpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuard,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
