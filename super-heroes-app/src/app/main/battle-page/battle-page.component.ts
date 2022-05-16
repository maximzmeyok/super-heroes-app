import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero, PowerUp } from 'src/app/shared/interfaces';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { PowerUpsService } from 'src/app/shared/services/power-ups.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlePageComponent {
  public usedPowerstats: string[] = [];

  public get selectedHero(): Hero {
    return this._heroesService.selectedHero;
  }

  public get enemyHero(): Hero {
    return this._heroesService.enemyHero;
  }

  public get powerUps(): PowerUp[] {
    return this._powerUpsService.sortPowerUps().filter((item: PowerUp): boolean => item.value > 0);
  }

  constructor(
    private _heroesService: HeroesService,
    private _powerUpsService: PowerUpsService
  ) { }

  public trackPowerUpsByFn(index: number, powerUp: PowerUp): string {
    return powerUp.name;
  }

  public selectPowerUp(powerstat: string): void {
    const isUppedPowerstat: boolean = this.usedPowerstats.some((usedPowerstat) => usedPowerstat ===  powerstat);

    isUppedPowerstat ? this._cancelPowerUp(powerstat) : this._usePowerUp(powerstat);
  }

  private _usePowerUp(powerstat: string): void {
    this.usedPowerstats.push(powerstat);
    this._heroesService.upPowerstat(powerstat);
  }

  private _cancelPowerUp(powerstat: string): void {
    const usedPowerstatIndex: number = this.usedPowerstats.findIndex((usedPowerstat) => usedPowerstat === powerstat);

    this.usedPowerstats.splice(usedPowerstatIndex, 1);
    this._heroesService.downPowerstat(powerstat);
  }

}
