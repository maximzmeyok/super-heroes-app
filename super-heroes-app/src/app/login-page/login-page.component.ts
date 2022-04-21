import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  public isTouchedInvalidForm(formControlName: string): boolean {
    return this.form.get(formControlName).touched && this.form.get(formControlName).invalid;
  }

  public isEmptyForm(formControlName: string): boolean {
    return this.form.get(formControlName).errors.required;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const loginData: LoginData = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    const isWrongLoginData: boolean = this._auth.login(loginData);

    if (isWrongLoginData) {
      return;
    }

    this.form.reset();
    this._router.navigate(['/', 'main']);
  }

}
