export interface User {
  username: string;
  email: string;
  password: string
}

export interface LoginData {
  email: string;
  password: string
}

export interface CurrentUser {
  email: string;
  password: string;
  expirationDate: number
}

export interface ApiResponse {
  response: string;
  results?: any;
  'results-for'?: string;
  error?: string
}

export interface Hero {
  response?: string
  id: string;
  name: string;
  image: any;
  appearance: any;
  biography: any;
  connections: any;
  powerstats: any;
  work: any
}

export interface BattleResult {
  date: number;
  heroName: string;
  heroId: string;
  enemyName: string;
  enemyId: string;
  result: string
}

export interface PowerUp {
  name: string;
  powerstatName: string;
  powerstatValue: string;
  value: number;
  image: string
}