import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-currency-two',
  templateUrl: './currency-two.component.html',
  styleUrls: ['./currency-two.component.css'],
})
export class CurrencyTwoComponent implements OnInit {

  @Output() currencyTwoValue = new EventEmitter<string>();
  @Output() inputTwoValue = new EventEmitter<string>();
  // @ViewChild('amountTwo') secondAmount;
  @Input() amountTwo;
  ngOnInit(): void {}

  onGetCurrencyTwo(event) {
    this.currencyTwoValue.emit(event.target.value);
  }

  onGetInput(event) {
    this.inputTwoValue.emit(event.target.value);
  }
}
