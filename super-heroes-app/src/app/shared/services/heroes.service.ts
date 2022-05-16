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
  public enemyHero: Hero;

  private _accessToken: string = '2838684283046319';

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  public getHeroes(searchValue: string): Observable<ApiResponse> {
    const url: string = `https://www.superheroapi.com/api.php/${this._accessToken}/search/${searchValue}`;

    return this._http.get<ApiResponse>(url);
  }

  public getHeroById(heroId: string): Observable<Hero> {
    const url: string = `https://www.superheroapi.com/api.php/${this._accessToken}/${heroId}`;

    return this._http.get<Hero>(url);
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
    const hasSelectedHero: boolean = !!this.selectedHero;
    const selectedHeroId: string = hasSelectedHero ? this.selectedHero.id : '';
    
    this.selectedHero = hero;
    this.ownedHeroes = [...this.ownedHeroes, hero];
    this._selectEnemyHero();

    if (!hasSelectedHero) {
      return;
    }

    this._updateSelectedHero(selectedHeroId);
  }

  public removeFromOwned(hero: Hero): void {
    const hasOwnedHeroes: boolean = this.ownedHeroes.length > 1 ? true : false;

    this.ownedHeroes = this.ownedHeroes.filter((ownedHero: Hero) => ownedHero.id !== hero.id);
    this._selectEnemyHero();

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

  private _selectEnemyHero(): void {
    const randomId: string = this._getRandomId(1, 731).toString();
    
    this.getHeroById(randomId)
    .subscribe((apiResponse: Hero): void => {
      this.enemyHero = apiResponse;
    });
  }

  private _getRandomId(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}