import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products:any = [];
constructor(private productsService:ProductsService){
  productsService.getProducts().subscribe(
    (data:any)=>{
    this.products = data;
    },
    (err:any)=>{
      alert("internal Server error")
    }
  )
}
}
