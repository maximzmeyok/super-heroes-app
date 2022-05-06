import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse, Hero } from "../interfaces";
import { UserService } from "./user.service";

@Injectable()
export class HeroesService {
  public foundHeroes: Hero[] = [];
  public ownedHeroes: Hero[] = [];
  public selectedHero: Hero;

  private _accessToken: string = '2838684283046319';

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  public getHeroes(searchValue: string): Observable<ApiResponse> {
    const url: string = `https://www.superheroapi.com/api.php/${this._accessToken}/search/${searchValue}`;

    return this._http.get<ApiResponse>(url);
  }

  public refreshRecentSearches(searchValue: string): void {
    const isOldSearch: boolean = this._userService.recentSearches.includes(searchValue);

    if (isOldSearch) {
      return;
    }

    this._userService.recentSearches.push(searchValue);
    localStorage.setItem('recentSearches', JSON.stringify(this._userService.recentSearches));
  }

  public addToOwned(hero: Hero): void {
    const hasSelectedHero: boolean = this.selectedHero ? true : false;
    const selectedHeroId: string = hasSelectedHero ? this.selectedHero.id : '';
    
    this.selectedHero = hero;
    this.ownedHeroes = [...this.ownedHeroes, hero];

    if (!hasSelectedHero) {
      return;
    }

    this._updateSelectedHero(selectedHeroId);
  }

  public removeFromOwned(hero: Hero): void {
    const hasOwnedHeroes: boolean = this.ownedHeroes.length > 1 ? true : false;

    this.ownedHeroes = this.ownedHeroes.filter((ownedHero: Hero) => ownedHero.id !== hero.id);

    if (!hasOwnedHeroes) {
      return;
    }
    
    this.selectedHero = this.ownedHeroes[this.ownedHeroes.length - 1];
    this._updateSelectedHero(this.selectedHero.id);
  }

  private _updateSelectedHero(heroId: string): void {
    const heroIndex: number = this.foundHeroes.findIndex((foundHero: Hero) => foundHero.id === heroId);

    this.foundHeroes[heroIndex] = {...this.foundHeroes[heroIndex]};
  }

}