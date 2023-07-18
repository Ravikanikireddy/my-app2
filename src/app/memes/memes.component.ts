import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {
public collects:any = [];
constructor(private memesService:MemesService){
 this.memesService.getCollects().subscribe(
  (data:any)=>{
    this.collects = data.data.memes;
  },
  (err:any)=>{
    alert("internal server error")
  }
 )
}
}
