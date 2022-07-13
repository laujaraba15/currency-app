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
  coins: any;
  slp: any
  public coin1: any;
  public coin2: any;
  public valueInput: any;
  public total: any;
  term: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get<Coin[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .subscribe((res: any) => {
        this.coins = res;
        console.log(this.coins);

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
    this.total = this.coin1 / this.coin2;
  }
}
