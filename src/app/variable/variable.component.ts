import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent {
public age:number = 22
public name:string = "Ravi Kanikireddy"
}
