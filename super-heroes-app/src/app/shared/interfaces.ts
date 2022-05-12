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

export interface ApiResponse {
  response: string,
  results?: any,
  'results-for'?: string,
  error?: string
}

export interface Hero {
  id: string,
  name: string,
  image: any,
  appearance: object,
  biography: object,
  connections: object,
  powerstats: any,
  work: object
}

export interface BattleResult {
  date: number,
  heroName: string,
  enemyName: string,
  result: string
}

export interface PowerUp {
  name: string,
  powerstatName: string,
  powerstatValue: string,
  value: string,
  image: string
}