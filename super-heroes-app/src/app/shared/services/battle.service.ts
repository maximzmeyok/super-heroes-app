import { Injectable } from "@angular/core";
import { BattleResult } from "../interfaces";

@Injectable()
export class BattleService {
  public battlesHistory: BattleResult[] = [];

  public sortBattlesHistory(filter: string): void {
    const date: string = 'date';
    const heroName: string = 'heroName';
    const enemyName: string = 'enemyName';
    const result: string = 'result';

    switch(filter) {
      case date:
        this.battlesHistory.sort((a: BattleResult, b: BattleResult): number => a.date - b.date);
        break;
      case heroName:
        this.battlesHistory.sort((a: BattleResult, b: BattleResult): number => this._compareStrings(a.heroName, b.heroName));
        break;
      case enemyName:
        this.battlesHistory.sort((a: BattleResult, b: BattleResult): number => this._compareStrings(a.enemyName, b.enemyName));
        break;
      case result:
        this.battlesHistory.sort((a: BattleResult, b: BattleResult): number => this._compareStrings(a.result, b.result));
        break;
    }
  }

  private _compareStrings(a: string, b: string): number {
    return a.localeCompare(b);
  }

}