import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-battles-history',
  templateUrl: './battles-history.component.html',
  styleUrls: ['./battles-history.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattlesHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
