import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }
  getContents(): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
  getFilteredContents(term:any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }
  getSortedContents(report:any,order:any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+report+"&order="+order);
  }
  getPageContents(limit:any,page:any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
  }
  createContents(data:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)

  
  }
  deleteContents(id:any):Observable<any> {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }
}