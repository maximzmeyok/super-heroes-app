import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public message: string;

  public get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  public get passwordControl(): AbstractControl {
    return this.form.get('password');
  }
  
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this._checkQueryParams();
    this._initForm();
  }

  private _checkQueryParams(): void {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Your current session has expired. Please login again to continue using this app!';
      }
    });
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
    this._router.navigate(['main', 'select']);
  }

}
