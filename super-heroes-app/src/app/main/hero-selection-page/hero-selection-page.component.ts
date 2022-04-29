import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/shared/form.validators';
import { ApiResponse, Hero } from 'src/app/shared/interfaces';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSelectionPageComponent implements OnInit {
  public form: FormGroup;

  public get results(): Hero[] {
    return this._heroesService.foundHeroes;
  }

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _heroesService: HeroesService
  ) { }

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

  public get searchControl(): AbstractControl {
    return this.form.get('search');
  }

  public submit(): void {
    const searchValue: string = this.searchControl.value;

    this._heroesService.getHeroes(searchValue)
    .subscribe((response: ApiResponse) => {
      this._heroesService.foundHeroes = response.results;
      this._cd.markForCheck();
    });
  }

}
