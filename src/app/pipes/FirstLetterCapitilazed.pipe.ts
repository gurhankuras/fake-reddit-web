import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitilazed'
})
export class FirstLetterCapitilazedPipe implements PipeTransform {
  transform(value: string): any {
    return value.split('').map((letter, index) => {
      if (index == 0) return letter.toUpperCase();
      return letter;
    }).join('');
  }
}
