import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public contents: any = [];
  public term:string = "";
  public report:string = "";
  public order:string = "";
  public limit:string = "";
  public page:string = "";
  constructor(private studentsService: StudentsService) {
    this.studentsService.getContents().subscribe(
      (data: any) => {
        this.contents = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getFilteredContents(){
    this.studentsService.getFilteredContents(this.term).subscribe(
      (data: any) => {
        this.contents = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getSortedContents(){
    this.studentsService.getSortedContents(this.report,this.order).subscribe(
      (data: any) => {
        this.contents = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  getPageContents(){
    this.studentsService.getPageContents(this.limit,this.page).subscribe(
      (data: any) => {
        this.contents = data;
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
  deleteContents(id:any){
    this.studentsService.deleteContents(id).subscribe(
      (data: any) => {
      alert("deleted successfully");
      location.reload();
      },
      (err: any) => {
        alert("internal server error");
      }
    )
  }
}
