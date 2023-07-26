import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  @Input() public num1:number = 0;
  @Input() public num2:number = 0;
 
  

  @Output() public bEvent:EventEmitter<any> = new EventEmitter();


  
sum(){
  this.bEvent.emit(this.num1+this.num2);
}
sub(){
  this.bEvent.emit(this.num1-this.num2);
}
mul(){
  this.bEvent.emit(this.num1*this.num2);
}
}
