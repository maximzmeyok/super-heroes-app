import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
