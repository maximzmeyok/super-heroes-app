import { Injectable } from "@angular/core";
import { LoginData, User } from "../interfaces";
import { AppComponent } from "src/app/app.component";

@Injectable()
export class AuthService {

  public login(loginData: LoginData): boolean {
    let isWrongLoginData = true;

    AppComponent.users.forEach((item) => {
      if (item.email !== loginData.email && item.password !== loginData.password) {
        return;
      }

      isWrongLoginData = false;
    });
    
    return isWrongLoginData;
  }

  public register(user: User): void {
    AppComponent.users.push(user);
  }
  
}