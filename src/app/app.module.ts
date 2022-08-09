import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyContainerComponent } from './currency-container/currency-container.component';
import { CurrencyOneComponent } from './currency-one/currency-one.component';
import { SwapButtonComponent } from './swap-rate/swap-button.component';
import { CurrencyTwoComponent } from './currency-two/currency-two.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CurrencyContainerComponent,
    CurrencyOneComponent, 
    SwapButtonComponent,
    CurrencyTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
