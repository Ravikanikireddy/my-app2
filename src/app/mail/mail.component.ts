import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
public contents:any=[];
constructor(private mailService:MailService){
  this.mailService.getContents().subscribe(
    (data:any)=>{
      this.contents = data ;
    },
    (error:any)=>{
      alert("internal server error")
    }
  )
  }
  
}

