import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from 'src/app/shared/interfaces';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlePageComponent {
  public get selectedHero(): Hero {
    return this._heroesService.selectedHero;
  }

  public get enemyHero(): Hero {
    return this._heroesService.enemyHero;
  }

  constructor(
    private _heroesService: HeroesService
  ) { }

}
