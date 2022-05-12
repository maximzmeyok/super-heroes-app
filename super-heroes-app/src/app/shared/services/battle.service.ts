import { Injectable } from "@angular/core";
import { BattleResult } from "../interfaces";

@Injectable()
export class BattleService {
  public battlesHistory: BattleResult[] = [];

  public sortBattlesHistory(filter: string): void {
    switch(filter) {
      case 'date':
        this.battlesHistory.sort((a, b) => a.date - b.date);
        break;
      case 'heroName':
        this.battlesHistory.sort((a, b) => this._compareStrings(a.heroName, b.heroName));
        break;
      case 'enemyName':
        this.battlesHistory.sort((a, b) => this._compareStrings(a.enemyName, b.enemyName));
        break;
      case 'result':
        this.battlesHistory.sort((a, b) => this._compareStrings(a.result, b.result));
        break;
    }
  }

  private _compareStrings(a: string, b: string) {
    return a.localeCompare(b);
  }

}