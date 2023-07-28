import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsCardComponent } from './payments-card/payments-card.component';
import { PaymentsUpiComponent } from './payments-upi/payments-upi.component';
import { PaymentsNetbankingComponent } from './payments-netbanking/payments-netbanking.component';

const routes: Routes = [
  {path:'payments-card',component:PaymentsCardComponent},
  {path:'payments-upi',component:PaymentsUpiComponent},
  {path:'payments-netbanking',component:PaymentsNetbankingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
