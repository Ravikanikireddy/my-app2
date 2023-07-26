import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  public num1:number = 0;
  public num2:number = 0;
  public result:number = 0;

  catch(value:any){
    this.result = value;
  }
}
