import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {
  text!: string[]
  transform(value: string): any {
    let newName = this.withoutVowels(value)
    return newName;
  }

  withoutVowels(text: string) {
   let res = '';
   for(let i = 0; i < text.length; i++){
      let el = text[i];
      if(el === 'a') el = String(4)
      if(el === 'e') el = String(3)
      if(el === 'i') el = String(1)
      if(el === 'o') el = String(0)
      if(el === 'u') el = String(9)
      res += el;
   };
   return res;
  }

}
