export interface User {
  username: string,
  email: string,
  password: string
}

export interface LoginData {
  email: string,
  password: string
}

export interface CurrentUser {
  email: string,
  password: string,
  expirationDate: number
}