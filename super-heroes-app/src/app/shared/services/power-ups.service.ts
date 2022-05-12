import { Injectable } from "@angular/core";
import { PowerUp } from "../interfaces";
import { POWER_UPS } from "../variables";

@Injectable()
export class PowerUpsService {
  public sortPowerUps(): PowerUp[] {
    return POWER_UPS.sort((a: PowerUp, b: PowerUp): number => this._compareStrings(a.value, b.value));
  }

  private _compareStrings(a: string, b: string): number {
    return b.localeCompare(a);
  }
}