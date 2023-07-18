import { Component } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent {

public term:string=""  ;

public products:any = [
  {name:'pen',price:10,rating:3,freedelivery:true},
  {name:'phone',price:13000,rating:2,freedelivery:false},
  {name:'shirt',price:400,rating:4,freedelivery:true},
  {name:'cap',price:200,rating:5,freedelivery:false},
  {name:'mobilecase',price:300,rating:2,freedelivery:true},
  {name:'remote',price:400,rating:2.5,freedelivery:false}
  ]
search(){
  this.products = this.products.filter((product:any)=>product.name.includes(this.term))
}
delivery(){
    this.products = this.products.filter((product:any)=>product.freedelivery==true)
}
sort1(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
}
sort2(){
  this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
}
sort3(){
  this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
sort4(){
  this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
}
map1(){
  this.products = this.products.map((product:any)=>{
  product.price=product.price/2;
  return product;
})
};

map2(){
     this.products = this.products.map((product:any)=>{
     if(product.freedelivery==false){
       product.price=product.price+20;
       return product;
     }
    else{
      return product;
    }

   })
  // this.products = this.products.map((product:any)=>{
  //       product.price= product.price+20;
  //       return product;
  // })
}

total(){
     var total = this.products.reduce((sum:any,a:any)=>sum+a.price,0);
       alert(total);
    }
length(){
  alert(this.products.length);
}
delete(i:any){
  this.products.splice(i,1);
}

}
