import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/shared/form.validators';
import { ApiResponse, Hero } from 'src/app/shared/interfaces';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSelectionPageComponent implements OnInit {
  public form: FormGroup;
  public isVisibleAlphabet: boolean = false;
  public alphabetButtonLetter: string = 'A';

  public get foundHeroes(): Hero[] {
    return this._heroesService.foundHeroes;
  }

  public get recentSearches(): string[] {
    return this._userService.recentSearches;
  }

  public get hasResults(): boolean {
    return !!this._heroesService.foundHeroes.length;
  }

  public get hasSearches(): boolean {
    return !!this._userService.recentSearches.length;
  }

  public get searchControl(): AbstractControl {
    return this.form.get('search');
  }

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _heroesService: HeroesService,
    private _userService: UserService
  ) { }

  public trackHeroesByFn(index: number, hero: any): any {
    return hero.id;
  }

  public trackPrimitivesByFn(index: number, item: any): any {
    return item;
  }

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._fb.group({
      search: ['', [
        Validators.required,
        FormValidators.isValidHeroname
      ]]
    });
  }

  public submit(): void {
    const searchValue: string = this.searchControl.value;

    this._heroesService.getHeroes(searchValue)
    .subscribe((apiResponse: ApiResponse) => {
      const responseStatus: string = apiResponse.response;

      if (responseStatus !== 'success') {
        return;
      }
      
      this._heroesService.refreshRecentSearches(searchValue);
      this._heroesService.foundHeroes = apiResponse.results;
      this._cd.markForCheck();
    });
  }

  public searchFromRecent(search: string): void {
    this.searchControl.setValue(search);
    this.submit();
  }

  public showCloseAlphabet(): void {
    this.isVisibleAlphabet = !this.isVisibleAlphabet;
  }

  public searchByLetter(letter: string): void {
    this.alphabetButtonLetter = letter;
    this.showCloseAlphabet();
    this.searchControl.setValue(letter);
    this.submit();
  }

}
