import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
public details:any = [];
constructor(private usersService:UsersService){
  this.usersService.getDetails().subscribe(
    (data:any)=>{
      this.details = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
}
}
