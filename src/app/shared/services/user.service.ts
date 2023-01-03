import { Injectable } from "@angular/core";
import { CurrentUser, User } from "../interfaces";

@Injectable()
export class UserService {
  public users: User[] = JSON.parse(localStorage.getItem('users')) || [];
  public currentUser: CurrentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  public recentSearches: string[] = JSON.parse(localStorage.getItem('recentSearches')) || [];
}