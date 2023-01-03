import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '../../interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent {
  @Input() public hero: Hero;

  public get isOwnedHero(): boolean {
    return this._heroesService.ownedHeroes.some((ownedHero: Hero) => ownedHero.name === this.hero.name);
  }

  public get isSelectedHero(): boolean {
    return this.hero.name === this._heroesService.selectedHero.name;
  }

  constructor(
    private _heroesService: HeroesService
  ) { }

  public addToOwned(): void {
    this._heroesService.addToOwned(this.hero);
  }

  public removeFromOwned(): void {
    this._heroesService.removeFromOwned(this.hero);
  }

}
