import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
