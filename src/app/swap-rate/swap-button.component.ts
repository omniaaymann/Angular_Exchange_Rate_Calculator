import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-swap-button',
  templateUrl: './swap-rate.component.html',
})
export class SwapButtonComponent implements OnInit {
  @Input() rate: any;
  @Input() currencyOne: any;
  @Input() currencyTwo: any;
  @Output() onSwapCurrencies = new EventEmitter();
  constructor() {}

  ngOnInit(): void { }
  
  swapCurrencies() {
    this.onSwapCurrencies.emit();
  }
}
