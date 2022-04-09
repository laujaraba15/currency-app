import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from './coin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  filterCoins: string = '';
  coins: Coin[] = [];
  public slp: any;
  public valueInput: any;
  public total: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get<Coin[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .subscribe((res: any) => {
        this.coins = res;
      });

    this.http
      .get<Coin[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=smooth-love-potion&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .subscribe((res: any) => {
        this.slp = res[0].current_price;
      });
  }

  calculate() {
    this.total = this.valueInput * this.slp + ' USD';
  }
}
