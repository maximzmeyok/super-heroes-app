import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData, User } from '../shared/interfaces';
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
    private _authService: AuthService,
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

  public get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  public get passwordControl(): AbstractControl {
    return this.form.get('password');
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const formData: User = this.form.value;
    const loginData: LoginData = {
      email: formData.email,
      password: formData.password
    };
    const isWrongLoginData: boolean = this._authService.login(loginData);

    if (isWrongLoginData) {
      return;
    }

    this.form.reset();
    this._router.navigate(['/', 'main']);
  }

}
