import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterCoins: string) {
    if (value.lenght === 0 || filterCoins === '') {
      return value;
    }

    const coins = [];
    for (const coin of value) {
      if (coin['id'] === filterCoins) {
        coins.push(coin);
      }
    }
    return coins;
  }
}
