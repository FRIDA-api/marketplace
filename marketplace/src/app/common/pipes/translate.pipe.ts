import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true
})
export class Translate implements PipeTransform {

  transform(language: string, germanValue: string, englishValue: string): string {
    if (language === 'de') {
      return germanValue
    }

    if (language === 'en') {
      return englishValue
    }

    return germanValue;
  }

}
