import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css'],
})
export class CurrencyContainerComponent implements OnInit {
  currencyOne: any;
  amountOne: any = 1;
  currencyTwo: any;
  amountTwo: number;
  rate: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getCurrencyOneValue(currencyOneValue) {
    this.currencyOne = currencyOneValue;
    this.calculate();
  }

  getCurrencyOneInputValue(amountOneValue) {
    this.amountOne = +amountOneValue;
    this.calculate();
  }

  calculate() {
    this.http
      .get<any>(
        `https://open.exchangerate-api.com/v6/latest/${this.currencyOne}`
      )
      .pipe(
        map((responseData) => {
          const rates = responseData?.rates;
          const rate = +rates[this.currencyTwo];
          return rate;
        })
      )
      .subscribe(
        (rate) => {
          this.rate = rate;
          console.log(rate);
          this.amountTwo = +(this.amountOne * this.rate).toFixed(2);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('req completed');
        }
      );
  }

  getCurrencyTwoValue(currencyTwoValue) {
    this.currencyTwo = currencyTwoValue;
    this.calculate();
  }

  getCurrencyInputTwo(amountTwoValue) {
    this.amountTwo = amountTwoValue;
    this.calculate();
  }

  swapCurrencies() {
    [this.currencyOne, this.currencyTwo] = [this.currencyTwo, this.currencyOne];
    this.calculate();
    console.log(this.currencyOne);
    console.log(this.currencyTwo);
  }
}
