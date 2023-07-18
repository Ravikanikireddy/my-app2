import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
public details:any={};
data:any;
constructor(private activityService:ActivityService){
   this.activityService.getDetails().subscribe(
     (data:any)=>{
      this.details = data;
     },   
    (err:any)=>{
      alert("internal server error")
     }   
   )
 }
reload(){
this.activityService.getDetails().subscribe(
     (data:any)=>{
      this.details = data;
     },
     (err:any)=>{
      alert("internal server error")
     }
   )
}

}