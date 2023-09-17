import { Component } from '@angular/core';
import { SameService } from '../same.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
 constructor(private sameService:SameService){}
 add(){
  this.sameService.setValue();
 }
}
