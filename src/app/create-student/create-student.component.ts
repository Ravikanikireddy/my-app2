import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
public studentForm:FormGroup = new FormGroup({
  name:new FormControl(),
  phone:new FormControl(),
  city:new FormControl()
})
constructor(private studentService:StudentsService){}
submit(){
  console.log(this.studentForm.value);
  this.studentService.createContents(this.studentForm.value).subscribe(
    (data:any)=>{
      alert("created students successfully");
    },
    (err:any)=>{
      alert("student creation failed");
    }
  )
}

}
