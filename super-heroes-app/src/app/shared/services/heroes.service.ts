import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse, Hero } from "../interfaces";

@Injectable()
export class HeroesService {
  private _accessToken: string = '2838684283046319';
  public foundHeroes: Hero[] = [];

  constructor(
    private _http: HttpClient
  ) { }

  public getHeroes(searchValue: string): Observable<ApiResponse> {
    const url: string = `https://www.superheroapi.com/api.php/${this._accessToken}/search/${searchValue}`;

    return this._http.get<ApiResponse>(url);
  }

}