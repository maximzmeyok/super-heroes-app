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
      if (item.email !== loginData.email && item.password !== loginData.password) {
        return;
      }

      isWrongLoginData = false;
    });
    
    return isWrongLoginData;
  }

  public register(user: User): void {
    this._userService.users.push(user);

    const users: string = JSON.stringify(this._userService.users);

    localStorage.setItem('users', users);
  }
  
}