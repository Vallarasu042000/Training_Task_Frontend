import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class DemoBehaviour {
    public auditcaseFormStatus = new BehaviorSubject("child2");
  }