import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../shared/form.validators';
import { User } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(8),
        FormValidators.isValidUsername
      ]],
      email: ['', [
        Validators.required,
        FormValidators.isValidEmail,
        FormValidators.isUniqueEmail
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        FormValidators.isValidPassword
      ]]
    });
  }

  public get nameControl(): AbstractControl {
    console.log(this.form.get('username'))
    return this.form.get('username');
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
    const user: User = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    this.form.reset();
    this._auth.register(user);
  }

}
