import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  static users: User[] = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
}
