import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.sass']
})
export class HeroSelectionPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._fb.group({
      search: ['', [
        Validators.required
      ]]
    });
  }

  public get searchControl(): AbstractControl {
    return this.form.get('search');
  }
}
