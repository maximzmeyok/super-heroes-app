import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.sass']
})
export class UserInfoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public trackHeroesByFn(index: number, hero: any): any {
    return hero.id;
  }

}
