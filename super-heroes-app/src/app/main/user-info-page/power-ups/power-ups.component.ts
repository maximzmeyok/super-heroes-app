import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-power-ups',
  templateUrl: './power-ups.component.html',
  styleUrls: ['./power-ups.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PowerUpsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
