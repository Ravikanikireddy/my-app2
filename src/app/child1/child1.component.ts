import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
@Input()public num1:number = 0;
@Input()public num2:number = 0;
@Input()public result:number = 0;

@Output() public eventEmitter:EventEmitter<any>= new EventEmitter();
add(){
this.eventEmitter.emit(this.num1+this.num2)
}

sub(){
  this.eventEmitter.emit(this.num1-this.num2)
}

mul(){
  this.eventEmitter.emit(this.num1*this.num2)
}

div(){
  this.eventEmitter.emit(this.num1/this.num2)
}

}
