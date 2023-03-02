import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  sharingData = new BehaviorSubject(false);
  constructor() { }

 changeDataSubject(data: any) {
   this.sharingData.next(data.value);
 }
}
 

