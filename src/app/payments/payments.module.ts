import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsNetbankingComponent } from './payments-netbanking/payments-netbanking.component';
import { PaymentsUpiComponent } from './payments-upi/payments-upi.component';
import { PaymentsCardComponent } from './payments-card/payments-card.component';


@NgModule({
  declarations: [
    PaymentsNetbankingComponent,
    PaymentsUpiComponent,
    PaymentsCardComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
