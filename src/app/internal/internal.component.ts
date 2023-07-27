import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent {
  @Input() public display: number = 0;
  public display2: number = 0;
  @Output() public eventEmitter: EventEmitter<any> = new EventEmitter();

  send() {
    this.eventEmitter.emit(this.display2);
  }
}




