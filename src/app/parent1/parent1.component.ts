import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component {
  public num1:number = 0;
  public num2:number = 0;
  public result:number = 0;

  catch(value:any){
    this.result =value;
  }
}
