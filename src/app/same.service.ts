import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SameService {
 public count:number = 0;
 public countsub:BehaviorSubject<any> = new BehaviorSubject(0);
  constructor() { }
  setValue(){
    this.countsub.next(this.count++);
  }
  getValue(){
    return this.countsub.asObservable();
  }
}
