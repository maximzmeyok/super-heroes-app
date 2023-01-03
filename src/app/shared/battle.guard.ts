import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HeroesService } from "./services/heroes.service";

@Injectable()
export class BattleGuard implements CanActivate {
  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._heroesService.ownedHeroes.length) {
      return true;
    }
    
    this._router.navigate(['main/select'], {
      queryParams: {
        hasNotSelectedHero: true
      }
    });

    return false;
  }
}