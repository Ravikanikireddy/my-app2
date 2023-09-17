import { Component } from '@angular/core';
import { SameService } from '../same.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {
  public cartCount: number = 0;
  constructor(private sameService: SameService) {
    sameService.getValue().subscribe(
      (data: any) => {
        this.cartCount = data;
      }
    )
  }
}
