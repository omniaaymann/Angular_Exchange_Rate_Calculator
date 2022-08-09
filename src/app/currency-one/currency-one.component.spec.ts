import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyOneComponent } from './currency-one.component';

describe('CurrencyOneComponent', () => {
  let component: CurrencyOneComponent;
  let fixture: ComponentFixture<CurrencyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
