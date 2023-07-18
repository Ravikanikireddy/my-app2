import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }
  getDetails(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }
}
