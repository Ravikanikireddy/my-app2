import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsUpiComponent } from './payments-upi.component';

describe('PaymentsUpiComponent', () => {
  let component: PaymentsUpiComponent;
  let fixture: ComponentFixture<PaymentsUpiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsUpiComponent]
    });
    fixture = TestBed.createComponent(PaymentsUpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
