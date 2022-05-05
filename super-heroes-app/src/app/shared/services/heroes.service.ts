import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse, Hero } from "../interfaces";
import { UserService } from "./user.service";

@Injectable()
export class HeroesService {
  private _accessToken: string = '2838684283046319';
  public foundHeroes: Hero[] = [];
  public ownedHeroes: Hero[] = [];
  public selectedHero: Hero;

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
    this.selectedHero = hero;
    this.ownedHeroes = [...this.ownedHeroes, hero];
  }

  public removeFromOwned(hero: Hero): void {
    this.ownedHeroes = this.ownedHeroes.filter((item: Hero) => {
      return item.name !== hero.name;
    });
    this.selectedHero = this.ownedHeroes[this.ownedHeroes.length - 1];
  }

}