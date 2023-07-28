import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsNetbankingComponent } from './payments-netbanking.component';

describe('PaymentsNetbankingComponent', () => {
  let component: PaymentsNetbankingComponent;
  let fixture: ComponentFixture<PaymentsNetbankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsNetbankingComponent]
    });
    fixture = TestBed.createComponent(PaymentsNetbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
