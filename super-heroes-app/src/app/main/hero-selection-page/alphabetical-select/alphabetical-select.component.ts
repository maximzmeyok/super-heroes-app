import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alphabetical-select',
  templateUrl: './alphabetical-select.component.html',
  styleUrls: ['./alphabetical-select.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphabeticalSelectComponent {
  @Output() public onLetterClick: EventEmitter<string> = new EventEmitter<string>();

  public alphabet: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  public searchByLetter(letter: string): void {
    this.onLetterClick.emit(letter);
  }

  public trackPrimitivesByFn(index: number, item: string): string {
    return item;
  }

}
