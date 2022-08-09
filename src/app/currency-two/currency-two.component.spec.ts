import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTwoComponent } from './currency-two.component';

describe('CurrencyTwoComponent', () => {
  let component: CurrencyTwoComponent;
  let fixture: ComponentFixture<CurrencyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
