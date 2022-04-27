import { Injectable } from "@angular/core";
import { LoginData, User } from "../interfaces";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  constructor(
    private _userService: UserService
  ) { }

  public login(loginData: LoginData): boolean {
    let isWrongLoginData: boolean = true;

    this._userService.users.forEach((item: User) => {
      if (item.email !== loginData.email || item.password !== loginData.password) {
        return;
      }

      this._setToken(loginData);
      isWrongLoginData = false;
    });
    
    return isWrongLoginData;
  }

  public register(user: User): void {
    this._userService.users.push(user);

    const users: string = JSON.stringify(this._userService.users);

    localStorage.setItem('users', users);
  }

  private _setToken(loginData: LoginData): void {
    const tokenTime = 3600000;
    
    this._userService.currentUser = {
      ...loginData,
      expirationDate : Date.now() + tokenTime
    };

    localStorage.setItem('currentUser', JSON.stringify(this._userService.currentUser));
  }

  public isValidToken(): boolean {
    const expirationDate: number = this._userService.currentUser.expirationDate;

    return expirationDate > Date.now();
  }
  
}