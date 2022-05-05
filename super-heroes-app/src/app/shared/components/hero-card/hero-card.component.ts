import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
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

  public isOwned: boolean;

  constructor(
    private _heroesService: HeroesService,
    private _cd: ChangeDetectorRef
  ) { }

  public addToOwned(): void {
    this._heroesService.addToOwned(this.hero);
    this.isOwned = true;
    this._cd.detectChanges()
  }

  public removeFromOwned(): void {
    this._heroesService.removeFromOwned(this.hero);
    this.isOwned = false;
  }

  public isSelectedHero(): boolean {
    const isNotMatchedName: boolean = this.hero.name !== this._heroesService.selectedHero.name;

    if (isNotMatchedName) {
      return false;
    }

    return true;
  }

}
