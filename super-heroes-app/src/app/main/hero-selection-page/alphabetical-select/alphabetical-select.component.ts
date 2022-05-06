import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabetical-select',
  templateUrl: './alphabetical-select.component.html',
  styleUrls: ['./alphabetical-select.component.sass']
})
export class AlphabeticalSelectComponent {
  @Output() onLetterClick: EventEmitter<string> = new EventEmitter<string>();

  public alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  public searchByLetter(letter: string): void {
    this.onLetterClick.emit(letter);
  }

}
