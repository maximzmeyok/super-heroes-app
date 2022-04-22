import { Injectable } from "@angular/core";
import { LoginData, User } from "../interfaces";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  constructor(
    private _users: UserService
  ) { }

  public login(loginData: LoginData): boolean {
    let isWrongLoginData = true;

    this._users.users.forEach((item: User) => {
      if (item.email !== loginData.email && item.password !== loginData.password) {
        return;
      }

      isWrongLoginData = false;
    });
    
    return isWrongLoginData;
  }

  public register(user: User): void {
    this._users.users.push(user);

    const users: string = JSON.stringify(this._users.users);

    localStorage.setItem('users', users);
  }
  
}