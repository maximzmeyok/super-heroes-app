import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from 'src/app/shared/interfaces';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent implements OnInit {
  public get ownedHeroes(): Hero[] {
    return this._heroesService.foundHeroes.filter((foundHero: Hero) => {
      return this._heroesService.ownedHeroes.some((ownedHero: Hero) => ownedHero.id === foundHero.id);
    });
  }

  public get hasResults(): boolean {
    return !!this._heroesService.ownedHeroes.length;
  }

  constructor(
    private _heroesService: HeroesService
  ) { }

  public trackHeroesByFn(index: number, hero: any): any {
    return hero.id;
  }

  ngOnInit(): void {
  }

}
