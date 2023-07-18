import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.scss']
})
export class FlipcartComponent {
public products:any = [];
constructor(private flipcartService:FlipcartService){
  this.flipcartService.getProducts().subscribe(
   (data:any)=>{
    this.products = data;
   },
   (error:any)=>{
        alert("internal server error")
   }
  )
    
  

}
}
