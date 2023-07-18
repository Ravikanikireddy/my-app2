import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

     constructor(private httpClient:HttpClient){}
     getStudents():Observable<any>{
       return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
     }
}
