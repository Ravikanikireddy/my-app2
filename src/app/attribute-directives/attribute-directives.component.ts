import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {

  public term:string = "";
public students:any = [
  {name:'ajay',science:90,maths:100},
  {name:'sairam',science:10,maths:15},
  {name:'sai mahesh',science:80,maths:50},
  {name:'ram raj',science:20,maths:20},
  {name:'ram raheem',science:40,maths:49},
  {name:'sai priya',science:22,maths:49}
]

public today:any = new Date();

search(){
              this.students = this.students.filter((student:any)=>student.name.includes(this.term));
}

add(){
  this.students = this.students.map((student:any)=>{
    student.science = student.science+2;
    return student;
  });
}

sort(){
       this.students = this.students.sort((a:any,b:any)=>b.science-a.science);
}

total(){
 var total = this.students.reduce((sum:any,a:any)=>sum.any+a.science,0);
 alert(total);
}

}
