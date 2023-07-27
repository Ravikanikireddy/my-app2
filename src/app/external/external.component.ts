import { Component } from '@angular/core';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent {
  public num1: number = 0;
  public num2: number = 0;

  catch(value: any) {
    this.num2 = value;
  }

}




















  //   public num1:string="";
//   public num2:string="";


//   catch(value:any){
// this.num2 = value;
//   }
