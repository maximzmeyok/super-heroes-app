import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public isTouchedInvalidForm(formControlName: string): boolean {
    return this.form.get(formControlName).touched && this.form.get(formControlName).invalid;
  }

  public isEmptyForm(formControlName: string): boolean {
    return this.form.get(formControlName).errors.required;
  }

  public isSmallLength(formControlName: string): number {
    return this.form.get(formControlName).errors.minlength;
  }

  public getRequiredLength(formControlName: string): number {
    return this.form.get(formControlName).errors.minlength.requiredLength;
  }

  public getActualLength(formControlName: string): boolean {
    return this.form.get(formControlName).errors.minlength.actualLength;
  }

  public isInvalidUsername(formControlName: string): boolean {
    return this.form.get(formControlName).errors.invalidUsername;
  }

  public isInvalidEmail(formControlName: string): boolean {
    return this.form.get(formControlName).errors.invalidEmail;
  }

  public isNotUniqueEmail(formControlName: string): boolean {
    return this.form.get(formControlName).errors.notUniqueEmail;
  }

  public isInvalidPassword(formControlName: string): boolean {
    return this.form.get(formControlName).errors.invalidPassword;
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    const user: User = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    this.form.reset();
    this._auth.register(user);
  }

}
