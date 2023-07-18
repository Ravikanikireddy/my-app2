import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  public accounts: any = [];
  public term: string = "";
  public column: string = "";
  public order: string = "";
  public limit: string = "";
  public page: string = "";


  constructor(private bankService: BankService) {
    this.bankService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getFilteredAccounts() {
    this.bankService.getFilteredAccounts(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getSortedAccounts() {
    this.bankService.getSortedAccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getPageAccounts(){
    this.bankService.getPageAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
       (err:any)=>{
        alert("internal server error");
       }
    )
  
}
deleteAccounts(id:any){
  this.bankService.deleteAccounts(id).subscribe(
    (data:any)=>{
      alert("delete items successfully")
      location.reload();
    },
     (err:any)=>{
      alert("internal server error");
     }
  )
}
}