import { FormControl } from "@angular/forms";
import { AppComponent } from "../app.component";
import { User } from "./interfaces";

export class FormValidators {
  
  static isValidUsername(control: FormControl): {[key: string]: boolean} {
    const usernameRegExp: RegExp = new RegExp('^[a-z]+-[a-z]+$|^[a-z]+[A-Z][a-z]+$|^[A-Z][a-z]+ [A-Z][a-z]+$');
    const givenUsername: string = control.value;
    const isValidUsername: boolean = usernameRegExp.test(givenUsername);
    
    if (isValidUsername) {
      return null;
    }

    return {invalidUsername: true};
  }
  
  static isValidEmail(control: FormControl): {[key: string]: boolean} {
    const emailRegExp: RegExp = new RegExp('^([a-zA-Z]*\\.?){1,3}[^\\.]*@([a-zA-Z]{1,5})(.com|.org|.net|.co|.us)$');
    const givenEmail: string = control.value;
    const isValidEmail: boolean = emailRegExp.test(givenEmail);
    
    if (isValidEmail) {
      return null;
    }

    return {invalidEmail: true};
  }
  
  static isUniqueEmail(control: FormControl): {[key: string]: boolean} {
    const givenEmail: string = control.value;

    let isUniqueEmail: boolean = true;

    AppComponent.users.forEach((user: User) => {
      if (user.email === givenEmail) {
        return;
      }

      isUniqueEmail = false;
    });
    
    if (isUniqueEmail) {
      return null;
    }

    return {notUniqueEmail: true};
  }
  
  static isValidPassword(control: FormControl): {[key: string]: boolean} {
    const requiredSymbols: RegExp = new RegExp('(?=.*[0-9].*)(?=.*[$%.&!].*)(?=.*[A-Z].*)');
    const allowedSymbols: RegExp = new RegExp('[0-9$%.&!a-zA-Z]', 'g');
    const givenPassword: string = control.value ? control.value : '';
    const onlyAllowedSymbols: boolean = !givenPassword.replace(allowedSymbols, '');
    const isValidPassword: boolean = requiredSymbols.test(givenPassword);
    
    if (isValidPassword && onlyAllowedSymbols) {
      return null;
    }

    return {invalidPassword: true};
  }

}