import { Injectable } from "@angular/core";
import { User } from "../interfaces";

@Injectable()
export class UserService {
  public users: User[] = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
}