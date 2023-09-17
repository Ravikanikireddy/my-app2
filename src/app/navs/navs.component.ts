import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { SameService } from '../same.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent {
  public cartCount: number = 0;
  constructor(private sameService: SameService) {
    sameService.getValue().subscribe(
      (data: any) => {
        this.cartCount = data;
      }
    )
  }
}
