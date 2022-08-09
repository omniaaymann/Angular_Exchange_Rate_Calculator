import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-currency-one',
  templateUrl: './currency-one.component.html',
  styleUrls: ['./currency-one.component.css'],
})
export class CurrencyOneComponent implements OnInit {
 
  @Output() currencyOneValue = new EventEmitter<string>();
  @Output() currencyOneInputValue = new EventEmitter<string>();
  ngOnInit(): void {}

  onGetCurrencyOne(event) {
    this.currencyOneValue.emit(event.target.value);
  }

  onGetCurrencyInputOne(event) {
    this.currencyOneInputValue.emit(event.target.value);
  }
}
