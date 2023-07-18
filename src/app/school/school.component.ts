import { Component } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent{
  public students:any=[];
  constructor(private schoolservice:SchoolService){
    this.schoolservice.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
      },
      (error:any)=>{
        alert("internal server error")
      }
      )
    

  }
}


